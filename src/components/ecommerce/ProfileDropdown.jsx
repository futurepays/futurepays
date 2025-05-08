import React from "react";
import "./profile.css"
import { useNavigate } from "react-router";

const ProfileDropdown = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");
        alert("Logout successful");
        navigate("/");
    };


  return (
    <>
        <div className="prof-drop-container">
            <div className="prof-list-sec">
                <div className="prof-list">
                    <a href="" className="list-items">Edit Profile</a>
                    <a href="" className="list-items">Track Order</a>
                    <a href="" className="list-items">FAQ</a>
                </div>
                <div className="prof-logout" onClick={handleLogout}>
                    <a href="" className="list-items logout">Logout</a>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProfileDropdown;
