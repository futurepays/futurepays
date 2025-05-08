import React, { useEffect, useState } from "react";
import "./notifications.css";
import NotLogo from "../../assets/logo.svg";

const NotificationsDesktop = () => {
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
    <div className="not-desk-container">
      <div className="not-desk-head">
        <p className="not-desk-title">Notifications centre</p>
      </div>
      <div className="not-desk-sec">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div className="not-desk-content" key={notification.id}>
              <div className="not-desk-img-container">
                <img src={NotLogo} alt="Future Pays Notification Logo" />
              </div>
              <p className="not-desk-text">{notification.message}</p>
            </div>
          ))
        ) : (
          <p className="not-desk-text">No notifications to show.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsDesktop;
