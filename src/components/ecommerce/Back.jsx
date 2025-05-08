import React from "react";
import BackArrow from "../../assets/back-arrow.svg"

const Back = () => {
  return (
    <>
        <div className="back-container">
            <div className="back-key">
                <img src={BackArrow} alt="Back Arrow Image for Navigation" />
                <p className="back-text">Back</p>
            </div>
        </div>
    </>
  );
};

export default Back;
