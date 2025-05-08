import React, { useState } from "react";
import "../components/admin/dashboard.css";
import NavBar from "../components/admin/NavBar";
import Menu from "../components/admin/Menu";
import DashFinances from "../components/admin/DashFinances";
import DashSales from "../components/admin/DashSales";
import DashLeaderBoard from "../components/admin/DashLeaderBoard";
import DashUsers from "../components/admin/DashUsers";

const AdminDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const sectionTitles = {
    Dashboard: "Dashboard",
    Users: "User Management",
    "Order Lists": "Order List",
    CMS: "Content Management System",
    Expense: "Expenses",
    // Logout: "Logout"
  };

  return (
    <>
      <NavBar />
      <div className="adm-dash-layout">
        <div className="adm-dash-menu">
          <Menu selected={selectedMenuItem} onSelect={setSelectedMenuItem} />
        </div>
        <div className="adm-dash-content">
          <div className="dash-sec-head">
            <p className="dash-sec-title">{sectionTitles[selectedMenuItem]}</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "35px"}}>
              <DashFinances />
              <DashSales />
              <DashLeaderBoard />
              <DashUsers />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
