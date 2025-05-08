import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./profile.css"
import Logo from "../../assets/logo.svg"
import LogoText from "../../assets/logo-text.png"
import Profile from "../../assets/profile.png"
import Notification from "../../assets/notification.png"
import ProfileDropdown from "./ProfileDropdown";
import NotificationsDesktop from "./NotificationsDesktop";
import WealthToggle from "../WealthToggle";
import Notifications from "./Notifications";

const NavBar = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [settingOpen, setSettingOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [hasNewNotifications, setHasNewNotifications] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = () => {
        setSettingOpen((prev) => !prev);
      };
    
      const toggleNotificationDropdown = () => {
        if (viewportWidth > 1023) {
          setNotificationOpen((prev) => !prev);
        } else {
          navigate("/notifications");
        }
      };

      useEffect(() => {
        const fetchNotificationStatus = async () => {
          try {
            const accessToken = sessionStorage.getItem("accessToken");
            console.log(accessToken);
      
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/customers/unseen/notifications/`, {
              headers: {
                "Authorization": `Bearer ${accessToken}`,
              },
            });
      
            if (!response.ok) {
              throw new Error("Network error. Failed to fetch notification status");
            }
      
            const result = await response.json();
            setHasNewNotifications(result.new_notifications);
          } catch (error) {
            console.error("Error fetching notification status:", error);
          }
        };
      
        fetchNotificationStatus();
      }, []);
      

  return (
    <>
        <div className="nav-container">
            <div className="nav-logo-container">
                <img src={Logo} className="nav-logo-img" alt="Future Pays Logo" />
                <img src={LogoText} className="nav-logo-text" alt="Future Pays Logo Text" />
            </div>
            <div className="nav-profile-container">
                <div className="nav-toggle">
                  <WealthToggle />
                </div>
                <div className="nav-notify" onClick={toggleNotificationDropdown}>
                    <img src={Notification} alt="profile Notification Bell"  />
                    {hasNewNotifications && <span className="notification-dot"></span>}
                </div>
                <div className="nav-profile" onClick={toggleDropdown}>
                    <img src={Profile} alt="User Profile" />
                </div>
                {settingOpen && <ProfileDropdown/>}
                {notificationOpen && viewportWidth < 1024 && <Notifications />}
                {notificationOpen && viewportWidth > 1023 && <NotificationsDesktop />}
            </div>
        </div>
    </>
  )
};

export default NavBar;
