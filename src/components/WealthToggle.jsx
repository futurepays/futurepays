import React, { useState } from "react";
import "../index.css";
import ToggleKey from "../assets/toggle-image-ecommerce.svg"; 
import ToggleLock from "../assets/toggle-image-wealth.svg"; 

const WealthToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`we-toggle-container ${isToggled ? "toggled" : ""}`} onClick={toggleHandler}>
      <div className={`we-toggle-head ${isToggled ? "toggled" : ""}`}>
        <div className={`toggle-head-icon ${isToggled ? "toggled" : ""}`}>
            <img src={isToggled ? ToggleLock : ToggleKey} alt={isToggled ? "On" : "Off"} />
        </div>
      </div>
    </div>
  );
};

export default WealthToggle;
