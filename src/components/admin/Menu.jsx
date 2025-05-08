import React from "react";
import "./dashboard.css";
import DashIcon from "../../assets/admin-dashboard.svg";

const Menu = ({ selected, onSelect }) => {
  const menuItems = [
    "Dashboard",
    "Users",
    "Order Lists",
    "CMS",
    "Expense",
    "Logout",
  ];

  return (
    <div className="adm-menu-container">
      <div className="adm-menu-content">
        {menuItems.slice(0, -1).map((item) => (
          <div
            key={item}
            className={`add-menu-item ${selected === item ? "selected" : ""}`}
            onClick={() => onSelect(item)}
          >
            <img src={DashIcon} alt="Icon" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="adm-menu-logout">
        <div
          className={`add-menu-item ${selected === "Logout" ? "selected" : ""}`}
          onClick={() => onSelect("Logout")}
        >
          <img src={DashIcon} alt="Icon" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
