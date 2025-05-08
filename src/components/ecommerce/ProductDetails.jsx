import React from "react";
import "./productPage.css"

const ProductDetails = () => {
  return (
    <>
        <div className="prod-page-det-container">
            <div className="prod-sec-one">
                <div className="prod-sec-div-one">
                    <div className="prod-det">
                        <p className="prod-det-head">Product Details</p>
                        <p className="prod-det-list">White Tshirt for Men, women</p>
                        <p className="prod-det-list">Striped solid</p>
                        <p className="prod-det-list">Crop length</p>
                        <p className="prod-det-list">Round neck</p>
                        <p className="prod-det-list">Short, regular sleeves</p>
                        <p className="prod-det-list">Woven cotton fabric</p>
                    </div>
                    <div className="size-fit">
                        <p className="prod-det-head">Size & Fit</p>
                        <p className="prod-det-list">Slim Fit</p>
                        <p className="prod-det-list">The model (height 5'8) is wearing a size S</p>
                    </div>
                </div>
                <div className="prod-sec-div-two">
                    <div className="mat-care">
                        <p className="prod-det-head">Material & Care</p>
                        <p className="prod-det-list">100% Cotton</p>
                        <p className="prod-det-list">Machine Wash</p>
                        <p className="prod-det-list">Wash Dark Color Separately. Warm Iron. Do Not Bleach. Do Not Tumble Dry.</p>
                    </div>
                </div>
            </div>
            <div className="prod-sec-two">
                <p className="prod-det-head">Specifications</p>
                <div className="prod-spec-sec">
                    <div className="prod-spec-row">
                        <div className="prod-specs">
                            <p className="prod-det-list">Fabric</p>
                            <p className="prod-det-list-bold">Cotton</p>
                        </div>
                        <div className="prod-specs">
                            <p className="prod-det-list">Fabric</p>
                            <p className="prod-det-list-bold">Cotton</p>
                        </div>
                    </div>
                    <div className="prod-spec-row">
                        <div className="prod-specs">
                            <p className="prod-det-list">Fabric</p>
                            <p className="prod-det-list-bold">Cotton</p>
                        </div>
                        <div className="prod-specs">
                            <p className="prod-det-list">Fabric</p>
                            <p className="prod-det-list-bold">Cotton</p>
                        </div>
                    </div>
                    <div className="prod-spec-row">
                        <div className="prod-specs">
                            <p className="prod-det-list">Fabric</p>
                            <p className="prod-det-list-bold">Cotton</p>
                        </div>
                        <div className="prod-specs">
                            <p className="prod-det-list">Fabric</p>
                            <p className="prod-det-list-bold">Cotton</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProductDetails;
