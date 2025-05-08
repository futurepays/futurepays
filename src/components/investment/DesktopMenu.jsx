import React, { useState } from "react";
import UserProfile from "../../assets/user-menu.svg";
import Global from "../../assets/global-menu.svg";
import Rewards from "../../assets/rewards-menu.svg";
import { Link } from "react-router-dom"; // Corrected import

const menuItems = [
  { name: "User Profile", icon: UserProfile, path: "/userProfile" },
  { name: "Global", icon: Global, path: "/global" },
  { name: "Rewards", icon: Rewards, path: "/rewards" },
];

const DesktopMenu = () => {
  const [selected, setSelected] = useState("User Profile");

  return (
    <div className="desk-menu-container">
      <div className="desk-menu-list">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`desk-menu-item ${selected === item.name ? "desk-selected" : ""}`}
            onClick={() => setSelected(item.name)}
          >
            <img src={item.icon} alt={item.name} />
            <span className="menu-item-name">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
