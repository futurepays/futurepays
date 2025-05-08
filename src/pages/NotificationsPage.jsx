import React, { useEffect, useState } from "react";
import "../components/ecommerce/notifications.css";
import NotLogo from "../assets/logo.svg";
import NavBar from "../components/ecommerce/NavBar";
import Back from "../components/ecommerce/Back";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const accessToken = sessionStorage.getItem("accessToken");
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/customers/notifications/`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch notifications");
        }

        const result = await response.json();
        setNotifications(result);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <>
      <NavBar />
      {/* <Back /> */}
      <div className="not-container">
        <div className="not-head">
          <p className="not-title">Notifications centre</p>
        </div>
        <div className="not-sec">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div className="not-content" key={notification.id}>
                <div className="not-img-container">
                  <img src={NotLogo} alt="Future Pays Notification Logo" />
                </div>
                <p className="not-text">{notification.message}</p>
              </div>
            ))
          ) : (
            <p className="not-text">No notifications to show.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
