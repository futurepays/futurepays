import React, { useState } from "react";
import "../ecommerce/menu.css"
import { Link } from "react-router";
import CloseMenu from "../../assets/close-menu.svg" 
import UserProfile from "../../assets/user-menu.svg" 
import Global from "../../assets/global-menu.svg" 
import Rewards from "../../assets/rewards-menu.svg" 

const MobileMenu = ({ isOpen, closeMenu }) => {
    const [selected, setSelected] = useState("User Profile");

  const handleSelect = (label) => {
    setSelected(label);
  };
  return (
    <>
        <div className={`mob-menu-wrapper ${isOpen ? "open" : ""}`}>
            <div className="mob-menu-container">
                <div className="mob-menu-close">
                    <img src={CloseMenu} alt="Close" onClick={closeMenu} />
                </div>
                <div className="mob-menu-content">
                {[
              { label: "User Profile", icon: UserProfile, path: "" },
              { label: "Global", icon: Global, path: "" },
              { label: "Rewards", icon: Rewards, path: "" },
            ].map((item) => (
              <div
                key={item.label}
                className={`mob-menu-item ${selected === item.label ? "selected" : ""}`}
                onClick={() => handleSelect(item.label)}
              >
                <img src={item.icon} alt={item.label} />
                <Link to={item.path}>{item.label}</Link>
              </div>
            ))}
                </div>
            </div>
        </div>
    </>
  );
};

export default MobileMenu;
