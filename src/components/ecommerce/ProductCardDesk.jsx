import React, { useState } from "react";
import ProdImg from "../../assets/product.png"
import ProdImg2 from "../../assets/product2.png"
import ProdImg3 from "../../assets/product3.png"
import Rating from "../../assets/rating.svg"
import Rupee from "../../assets/rupee.svg"
import Cart from "../../assets/cart.svg"
import WishList from "../../assets/wishlist.svg"
import DeliveryOptions from "./DeliveryOptions";
import { useNavigate } from "react-router";

const ProductCardDesk = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState("");
    const productImages = product.images?.map(img => img.image) || [];

    const [selectedImage, setSelectedImage] = useState(productImages[0] || "");

    const sizes = ["S", "M", "L", "XL"];

    const basePrice = parseFloat(product.base_price);
    const offerPrice = parseFloat(product.offer_price);

    const discountPercentage = ((basePrice - offerPrice) / basePrice) * 100;

    const navigate = useNavigate();

const handleBuyNow = async () => {
    if (!selectedSize) {
        alert("Please select a size before proceeding.");
        return;
    }

    const payload = {
        product: product.id,
        size: selectedSize.toLowerCase(),
    };

    console.log("Posting to cart:", payload);

    const accessToken = sessionStorage.getItem("accessToken");

    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/customers/carts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
    console.log("Server response:", result);

    if (!response.ok) {
        throw new Error(`Failed to add product to cart: ${result?.detail || "Unknown error"}`);
    }

        console.log("Product successfully added to cart");
        navigate("/addAddress");
    } catch (error) {
        console.error("Error posting to cart:", error);
    }
};



  return (
    <>
        <div className="prod-desk-container">
            <div className="prod-desk-img-holder">
                {productImages.map((image, index) => (
                    <div className="prod-desk-img-container" key={index} onClick={() => setSelectedImage(image)} style={{ cursor: 'pointer' }}>
                        <img src={image} alt={`Product ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="prod-desk-img-dis">
                <div>
                <img src={selectedImage} alt="Selected Product" />
                </div>
            </div>
            <div className="prod-desk-det">
                <div className="prod-desk-head">
                    <p className="prod-desk-title">{product.name}</p>
                    <p className="prod-desk-desc">{product.description}</p>
                    <div className="prod-desk-rating">
                        <p className="prod-desk-ratcount rat-overall">4.4</p>
                        <img src={Rating} alt="Product Rating Star" />
                        <p className="prod-desk-ratcount">62 Ratings</p>
                    </div>
                </div>
                <div className="prod-desk-footer">
                                <div className="prod-desk-price">
                                    <div className="prod-desk-disc-amt">
                                        <p className="prod-desk-amt">{offerPrice.toFixed(0)}</p>
                                        <img src={Rupee} alt="Currency" />
                                    </div>
                                    <div className="prod-desk-act-amt">
                                        <div className="prod-desk-mrp-sec">
                                            <p className="prod-desk-mrp">MRP</p>
                                            <p className="prod-desk-mrp strike">{basePrice.toFixed(0)}</p>
                                        </div>
                                        <p className="prod-desk-disc">({discountPercentage.toFixed(2)}% Off)</p>
                                    </div>
                                </div>
                                <div className="prod-desk-incl-tax">Inclusive off all taxes</div>
                                <div className="prod-desk-size">
                                    <p className="select-size">Select Size</p>
                                    <p className="size-chart">Size Chart</p>
                                </div>
                                <div className="prod-desk-size-sel">
                                    {sizes.map((size) => (
                                        <div
                                            key={size}
                                            className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                           {size}
                                        </div>
                                    ))}
                                </div>
                                <div className="prod-desk-proceed">
                                    <div className="prod-desk-buy" onClick={handleBuyNow}>
                                        <p>Buy Now</p>
                                        <img src={Cart} alt="Cart" />
                                    </div>
                                    <div className="prod-desk-wishlist">
                                        <p>Wishlist</p>
                                        <img src={WishList} alt="Wishlist" />
                                    </div>
                                </div>
                                <DeliveryOptions />
                            </div>
            </div>
        </div>
    </>
  );
};

export default ProductCardDesk;
