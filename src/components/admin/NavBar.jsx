import React from "react";
import "./dashboard.css"
import AdminLogo from "../../assets/admin-logo.svg"
import AdminNotify from "../../assets/admin-notifications.svg"
import ProfImg from "../../assets/admin-profile.png"
import ProfileDropdown from "../../assets/admin-prof-dropdown.svg"

const NavBar = ({ onNotificationClick }) => {
  return (
    <>
        <div className="adm-nav-container">
            <div className="adm-nav-content">
                <div className="adm-nav-logo">
                    <img src={AdminLogo} alt="Future Pays Logo" />
                </div>
                <div className="adm-nav-opt">
                    <div className="adm-nav-not" onClick={onNotificationClick}>
                        <img src={AdminNotify} alt="Notify" />
                    </div>
                    <div className="adm-nav-prof">
                        <img src={ProfImg} alt="Profile" />
                    </div>
                    <div className="adm-nav-set">
                        <div className="adm-nav-set-layout">
                            <div className="set-prof">
                                <p className="set-prof-name">RK</p>
                                <p className="set-prof-role">Admin</p>
                            </div>
                            <img src={ProfileDropdown} alt="Dropdown" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default NavBar;
