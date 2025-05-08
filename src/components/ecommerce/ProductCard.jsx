import React, { useEffect, useRef, useState } from "react";
import "./productPage.css";
import { useNavigate } from "react-router";
import Rating from "../../assets/rating.svg";
import Rupee from "../../assets/rupee.svg";
import Cart from "../../assets/cart.svg";
import WishList from "../../assets/wishlist.svg";
import DeliveryOptions from "./DeliveryOptions";

const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState("");
    const [activeImage, setActiveImage] = useState(0);
    const productImages = product.images?.map(img => img.image) || [];
    const imageContainerRef = useRef(null);
    const navigate = useNavigate();

    const sizes = ["S", "M", "L", "XL"];

    const basePrice = parseFloat(product.base_price);
    const offerPrice = parseFloat(product.offer_price);
    const discountPercentage = ((basePrice - offerPrice) / basePrice) * 100;

    const handleScroll = () => {
        if (imageContainerRef.current) {
            const scrollLeft = imageContainerRef.current.scrollLeft;
            const width = imageContainerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveImage(index);
        }
    };

    useEffect(() => {
        const container = imageContainerRef.current;
        container?.addEventListener("scroll", handleScroll);
        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDotClick = (index) => {
        if (imageContainerRef.current) {
            const containerWidth = imageContainerRef.current.offsetWidth;
            imageContainerRef.current.scrollTo({
                left: containerWidth * index,
                behavior: "smooth",
            });
        }
        setActiveImage(index);
    };

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
            <div className="prod-card-container">
                <div className="prod-card-head">
                    <p className="prod-card-name">{product.name}</p>
                    <div className="prod-card-secondary">
                        <p className="prod-card-desc">{product.description}</p>
                        <div className="prod-card-rating">
                            <p className="prod-card-ratcount rat-overall">4.4</p>
                            <img src={Rating} alt="Product Rating Star" />
                            <p className="prod-card-ratcount">62 Ratings</p>
                        </div>
                    </div>
                </div>
                <div className="prod-card-mid">
                    <div className="prod-card-img-scroll" ref={imageContainerRef}>
                        {productImages.map((img, index) => (
                            <img key={index} src={img} alt={`Product ${index + 1}`} />
                        ))}
                    </div>
                    <div className="prod-card-img-dots">
                        {productImages.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${activeImage === index ? "image-active" : ""}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="prod-card-footer">
                    <div className="prod-card-size">
                        <p className="select-size">Select Size</p>
                        <p className="size-chart">Size Chart</p>
                    </div>
                    <div className="prod-card-size-sel">
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
                    <div className="prod-card-price">
                        <div className="prod-card-disc-amt">
                            <p className="prod-card-amt">{offerPrice.toFixed(0)}</p>
                            <img src={Rupee} alt="Currency" />
                        </div>
                        <div className="prod-card-act-amt">
                            <div className="prod-card-mrp-sec">
                                <p className="prod-card-mrp">MRP</p>
                                <p className="prod-card-mrp strike">{basePrice.toFixed(0)}</p>
                            </div>
                            <p className="prod-card-disc">({discountPercentage.toFixed(2)}% Off)</p>
                        </div>
                    </div>
                    <div className="prod-card-incl-tax">Inclusive off all taxes</div>
                    <div className="prod-card-proceed">
                        <div className="prod-card-buy" onClick={handleBuyNow}>
                            <p>Buy Now</p>
                            <img src={Cart} alt="Cart" />
                        </div>
                        <div className="prod-card-wishlist">
                            <p>Wishlist</p>
                            <img src={WishList} alt="Wishlist" />
                        </div>
                    </div>
                </div>
            </div>
            <DeliveryOptions />
        </>
    );
};

export default ProductCard;
