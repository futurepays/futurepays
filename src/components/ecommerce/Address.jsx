import React, { useState } from "react";
import "./address.css";
import PurchaseWarn from "../../assets/purchase-warning.svg";
import PayArrow from "../../assets/pay-arrow.svg";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
  "Ladakh", "Lakshadweep", "Puducherry"
];

const Address = ({onSuccess}) => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    locality: "",
    flat_number: "",
    city: "",
    state: "",
    postal_code: "",
    district: "",
    address_mode: "",
    country: "India"
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone_number)) newErrors.phone_number = "Enter a valid 10-digit phone number";
    if (!/^\d{6}$/.test(formData.postal_code)) newErrors.postal_code = "Enter a valid 6-digit pincode";
    if (!formData.locality.trim()) newErrors.locality = "Locality is required";
    if (!formData.flat_number.trim()) newErrors.flat_number = "Flat number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.address_mode.trim()) newErrors.address_mode = "Select address type";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Please correct the highlighted errors in the form.");
      return;
    }
    setSubmitting(true);

    const accessToken = sessionStorage.getItem("accessToken");

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/authentication/addresses/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit address");
      }

      const result = await response.json();
      console.log("Server response:", result.message || result);
      alert("Address added successfully!");
      setFormData({
        full_name: "", phone_number: "", locality: "", flat_number: "",
        city: "", state: "", postal_code: "", district: "", address_mode: "", country: "India"
      });
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="add-container">
      <div className="add-head">
        <p className="add-title">Add Address</p>
      </div>
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <div className="add-input-item">
            <label htmlFor="full_name">Name *</label>
            <input name="full_name" type="text" value={formData.full_name} onChange={handleChange} placeholder="Enter your name" className="unstyled-inputs" />
            {errors.full_name && <small className="error" style={{color: "red"}}>{errors.full_name}</small>}
          </div>

          <div className="add-input-item">
            <label htmlFor="phone_number">Phone Number *</label>
            <input name="phone_number" type="number" value={formData.phone_number} onChange={handleChange} placeholder="Enter your phone number" className="unstyled-inputs no-spinner" />
            {errors.phone_number && <small className="error" style={{color: "red"}}>{errors.phone_number}</small>}
          </div>

          <div className="add-input-item">
            <label htmlFor="postal_code">Pincode *</label>
            <input name="postal_code" type="number" value={formData.postal_code} onChange={handleChange} placeholder="Enter your pincode" className="unstyled-inputs no-spinner" />
            {errors.postal_code && <small className="error" style={{color: "red"}}>{errors.postal_code}</small>}
          </div>

          <div className="res-input-sec">
            <div className="add-input-item">
              <label htmlFor="locality">Locality *</label>
              <input name="locality" type="text" value={formData.locality} onChange={handleChange} placeholder="Enter your locality" className="unstyled-inputs" />
              {errors.locality && <small className="error" style={{color: "red"}}>{errors.locality}</small>}
            </div>

            <div className="add-input-item">
              <label htmlFor="flat_number">Flat Number *</label>
              <input name="flat_number" type="text" value={formData.flat_number} onChange={handleChange} placeholder="Flat number/Building name" className="unstyled-inputs" />
              {errors.flat_number && <small className="error" style={{color: "red"}}>{errors.flat_number}</small>}
            </div>
          </div>

          <div className="res-input-sec">
            <div className="add-input-item">
              <label htmlFor="state">State *</label>
              <select name="state" value={formData.state} onChange={handleChange} className="unstyled-inputs">
                <option value="" disabled>Select your state</option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <small className="error" style={{color: "red"}}>{errors.state}</small>}
            </div>

            <div className="add-input-item">
              <label htmlFor="city">City *</label>
              <input name="city" type="text" value={formData.city} onChange={handleChange} placeholder="Enter your city" className="unstyled-inputs" />
              {errors.city && <small className="error" style={{color: "red"}}>{errors.city}</small>}
            </div>
          </div>

          <div className="add-input-item">
            <label htmlFor="district">District *</label>
            <input name="district" type="text" value={formData.district} onChange={handleChange} placeholder="Enter your district" className="unstyled-inputs" />
            {errors.district && <small className="error" style={{color: "red"}}>{errors.district}</small>}
          </div>

          <div className="add-input-item">
            <p className="add-type">Address Type *</p>
            <div className="address-type-options">
              {["Home", "Office", "Others"].map((type) => (
                <label key={type} className="address-type-option">
                  <input
                    type="radio"
                    name="address_mode"
                    value={type.toLowerCase()}
                    checked={formData.address_mode === type.toLowerCase()}
                    onChange={handleChange}
                  />
                  {type}
                </label>
              ))}
            </div>
            {errors.address_mode && <small className="error" style={{color: "red"}}>{errors.address_mode}</small>}
          </div>

          <div className="warn-container">
            <img src={PurchaseWarn} alt="Warning Symbol" />
            <p className="warn-text">All purchases are final. No refunds will be provided.</p>
          </div>

          <div className="confirm-btn" onClick={handleSubmit}>
            <p className="pay-btn">{submitting ? "Submitting..." : "Confirm Payment"}</p>
            <img src={PayArrow} alt="Payment Confirm Arrow" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
