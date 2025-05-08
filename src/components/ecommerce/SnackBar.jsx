import React from "react";
import "./snackBar.css";
import SnackLock from "../../assets/snack-lock.svg"

const SnackBar = () => {
  return (
    <>
        <div className="snack-bar-container">
            <div className="snack-content">
                <img src={SnackLock} alt="Wealth Section Lock Image" />
                <p className="snack-text">Unlock Your Wealth - Purchase the T-Shirt to Begin Your Journey!</p>
            </div>
        </div>
    </>
  );
};

export default SnackBar;
