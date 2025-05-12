import React, { useState } from "react";
import "../components/admin/dashboard.css";
import NavBar from "../components/admin/NavBar";
import Menu from "../components/admin/Menu";
import DashFinances from "../components/admin/DashFinances";
import DashSales from "../components/admin/DashSales";
import DashLeaderBoard from "../components/admin/DashLeaderBoard";
import DashUsers from "../components/admin/DashUsers";
import Notifications from "../components/admin/Notifications";
import Expenses from "../components/admin/Expenses";

const AdminDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const sectionTitles = {
    Dashboard: "Dashboard",
    Users: "User Management",
    "Order Lists": "Order List",
    CMS: "Content Management System",
    Expense: "Expenses",
    Notifications: "Notifications",
    // Logout: "Logout"
  };

  return (
    <>
      <NavBar onNotificationClick={() => setSelectedMenuItem("Notifications")} />
      <div className="adm-dash-layout">
        <div className="adm-dash-menu">
          <Menu selected={selectedMenuItem} onSelect={setSelectedMenuItem} />
        </div>
        <div className="adm-dash-content">
          <div className="dash-sec-head">
            <p className="dash-sec-title">{sectionTitles[selectedMenuItem]}</p>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "35px"}}>
              {selectedMenuItem === "Dashboard" &&
                <div>
                  <DashFinances />
                  <DashSales />
                  <DashLeaderBoard />
                </div>
              }
              {selectedMenuItem === "Users" &&
                <div>
                  <DashUsers />
                </div>
              }
              { selectedMenuItem === "Expense" &&
                <div>
                  <Expenses />
                </div>
              }
              {selectedMenuItem  === "Notifications" && 
                <Notifications />
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
