import React, { useState } from "react";
import "./notifications.css";

const Notifications = () => {
  const [selectedTab, setSelectedTab] = useState("Important");

  return (
    <div className="adm-not-container">
      <div className="adm-not-head">
        <div
          className={`adm-head-title ${selectedTab === "Important" ? "selected" : ""}`}
          onClick={() => setSelectedTab("Important")}
        >
          <p>Important</p>
          <span></span>
        </div>
        <div
          className={`adm-head-title ${selectedTab === "General" ? "selected" : ""}`}
          onClick={() => setSelectedTab("General")}
        >
          <p>General</p>
          <span></span>
        </div>
      </div>

      <div className="adm-not-content">
        {selectedTab === "Important" ? (
          <>
            <NotificationSection title="Rewards" />
            <NotificationSection title="Support & Issues" />
            <NotificationSection title="Global Income" />
          </>
        ) : (
          <>
            <NotificationSection title="Toggle" />
            <NotificationSection title="T-Shirt Delivery & Orders" />
            <NotificationSection title="Referrals" />
            <NotificationSection title="Tier Progress" />
          </>
        )}
      </div>
    </div>
  );
};

const NotificationSection = ({ title }) => (
  <div className="not-content-sec">
    <div className="not-content-head">
      <p>{title}</p>
    </div>
    <div className="not-content-main">
      <div className="not-content-each">
        <img src="" alt="" />
        <p className="not-each-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, distinctio?</p>
        <p className="not-view-btn">View</p>
      </div>
      <div className="not-content-each">
        <img src="" alt="" />
        <p className="not-each-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, distinctio?</p>
        <p className="not-view-btn">View</p>
      </div>
    </div>
  </div>
);

export default Notifications;
