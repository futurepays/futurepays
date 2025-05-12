import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import ToggleKey from "../assets/toggle-image-ecommerce.svg";
import ToggleLock from "../assets/toggle-image-wealth.svg";
import SharedContext from "../context/SharedContext"; // Adjust path

const WealthToggle = () => {
  const { isToggled, setIsToggled } = useContext(SharedContext);
  const navigate = useNavigate();

  const toggleHandler = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    navigate(newState ? "/wealthProfile" : "/explore");
  };

  return (
    <div
      className={`we-toggle-container ${isToggled ? "toggled" : ""}`}
      onClick={toggleHandler}
    >
      <div className={`we-toggle-head ${isToggled ? "toggled" : ""}`}>
        <div className={`toggle-head-icon ${isToggled ? "toggled" : ""}`}>
          <img src={isToggled ? ToggleLock : ToggleKey} alt={isToggled ? "On" : "Off"} />
        </div>
      </div>
    </div>
  );
};

export default WealthToggle;
