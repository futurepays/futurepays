import React from "react";
import "./profile.css";
import CardClose from "../../assets/prof-card-close.svg";

const ProfileCard = ({ onClose }) => {
  return (
    <div className="prof-card-container">
      <div className="prof-card-close" onClick={onClose}>
        <img src={CardClose} alt="Close" />
      </div>
      <div className="prof-card-content">
        <div className="prof-card-item">
          <p className="prof-card-super-fix">Name</p>
          <p className="prof-card-sub-fix">Nagaraju</p>
        </div>
        <div className="prof-card-item">
          <p className="prof-card-super-fix">Email Id</p>
          <p className="prof-card-sub-fix">naga@gmail.com</p>
        </div>
        <div className="prof-card-item">
          <p className="prof-card-super-fix">Date</p>
          <p className="prof-card-sub-fix">11/11/11</p>
        </div>
        <div className="prof-card-item">
          <p className="prof-card-super-fix">Tier</p>
          <p className="prof-card-sub-fix">Explore</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
