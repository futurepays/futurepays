import React, { useEffect, useState } from "react";
import "./address.css";
import AddAddress from "../../assets/add-address.svg";
import PayArrow from "../../assets/pay-arrow.svg";
import OrderConfirmModal from "./OrderConfirmModal";
import { useNavigate } from "react-router";

const AddressType = ({ onAddNew }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");

    const fetchAddressData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/authentication/user/address/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch address data");
        const data = await response.json();

        if (Array.isArray(data)) setAddresses(data);
        else if (Array.isArray(data.results)) setAddresses(data.results);
        else {
          console.error("Unexpected address format", data);
          setAddresses([]);
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        setAddresses([]);
      }
    };

    const fetchLatestCart = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/customers/latest-cart/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch latest cart");

        const result = await response.json();
        setCartId(result?.id); // 🆕 Save cart ID
      } catch (error) {
        console.error("Error fetching latest cart:", error);
      }
    };

    fetchAddressData();
    fetchLatestCart(); // 🆕 Fetch cart when component loads
  }, []);

  const handleConfirmPayment = async () => {
    setSubmitting(true);

    if (!selectedAddressId || !cartId) {
      alert("Address or Cart is missing. Please try again.");
      return;
    }

    const accessToken = sessionStorage.getItem("accessToken");

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/customers/buy-now/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          address: selectedAddressId,
          cart: cartId,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.detail || "Failed to place the order.");
      }
      setOrderPlaced(true);

      // Navigate after 5 seconds
      setTimeout(() => {
        navigate("/explore");
      }, 5000);
    } catch (error) {
      console.error("Error during final order placement:", error);
      alert(`Order failed: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const groupByType = (type) => addresses.filter((a) => a.address_mode === type);

  const renderAddressGroup = (type, label) => {
    const group = groupByType(type);
    if (!group.length) return null;

    return (
      <div className="add-type-input-item">
        <p className="add-type-name">{label}</p>
        {group.map((address) => (
          <div className="add-type-card" key={address.id}>
            <label className="address-type-option add-type-card-label">
              <input
                type="radio"
                name="addressType"
                value={address.id}
                checked={selectedAddressId === address.id}
                onChange={() => setSelectedAddressId(address.id)}
                required
              />
              {`${address.full_name}, ${address.phone_number}, ${address.postal_code}, ${address.flat_number}, ${address.locality}, ${address.city}, ${address.district}, ${address.state}, ${address.country}`}
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
    {orderPlaced && <OrderConfirmModal />}
    <div className="add-type-container">
      <div className="add-type-card-container">
        <form>
          {renderAddressGroup("home", "Home")}
          {renderAddressGroup("office", "Work")}
          {renderAddressGroup("others", "Other")}

          <div className="add-type-add" onClick={onAddNew}>
            <p>Add Address</p>
            <img src={AddAddress} alt="Add Address Button" />
          </div>

          <div className="confirm-btn" onClick={handleConfirmPayment}>
            <p className="pay-btn">{submitting ? "Submitting..." : "Confirm Payment"}</p>
            <img src={PayArrow} alt="Payment Confirm Arrow" />
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddressType;
