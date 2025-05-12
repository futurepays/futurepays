import React from "react";
import "../ecommerce/menu.css"
import { Link } from "react-router";
import CloseMenu from "../../assets/close-menu.svg" 
import UserProfile from "../../assets/user-menu.svg" 
import Global from "../../assets/global-menu.svg" 
import Rewards from "../../assets/rewards-menu.svg" 

const menuItems = [
  { name: "User Profile", icon: UserProfile },
  { name: "Global", icon: Global },
  { name: "Rewards", icon: Rewards },
];

const MobileMenu = ({ isOpen, closeMenu, selected, setSelected }) => {

  const handleSelect = (name) => {
    setSelected(name);
    closeMenu(); 
  };
  return (
    <>
        <div className={`mob-menu-wrapper ${isOpen ? "open" : ""}`}>
            <div className="mob-menu-container">
                <div className="mob-menu-close">
                    <img src={CloseMenu} alt="Close" onClick={closeMenu} />
                </div>
                <div className="mob-menu-content">
                {menuItems.map((item) => (
              <div
                key={item.name}
                className={`mob-menu-item ${selected === item.name ? "selected" : ""}`}
                onClick={() => handleSelect(item.name)}
              >
                <img src={item.icon} alt={item.label} />
                <Link>{item.name}</Link>
              </div>
            ))}
                </div>
            </div>
        </div>
    </>
  );
};

export default MobileMenu;
