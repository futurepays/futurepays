import React from "react";
import BannerImg from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <>
        <div className="banner-container">
            <img src={BannerImg} className="banner-img" alt="Banner Image" />
            <div className="discount-banner">
                <p className="discount-text">Sale 40% off</p>
            </div>
        </div>
    </>
  );
};

export default Banner;
