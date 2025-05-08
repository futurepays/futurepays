import React from "react";
import "./productPage.css"
import Delivery from "../../assets/delivery-options.svg"

const DeliveryOptions = () => {
  return (
    <>
        <div className="delv-opt-container">
            <div className="delv-check-sec">
                <div className="delv-check-head-sec">
                    <p className="delv-head">Delivery Options</p>
                    <img src={Delivery} alt="Delivery Options" />
                </div>
                <div className="delv-pincode-sec">
                    <input type="number" className="unstyled-inputs pincode-checker no-spinner" name="" id="" placeholder="Enter Pincode" />
                    <p className="pincode-check-btn">Check</p>
                </div>
                <div className="delv-det">
                    <p>100% Original Products</p>
                    <p>Pay on delivery might not be available</p>
                    <p>45 Days for Delivery</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default DeliveryOptions;
