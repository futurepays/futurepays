import React, { useEffect, useState } from "react";
import "./profile.css"
import UserProfile from "../../assets/user-profile.png"
import EditProfile from "../../assets/edit-profile.svg"
import Cashout from "../../assets/cashout.svg"
import Fortune from "../../assets/fortune.svg"

const UserDetails = ({ onEditProfile }) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    
        useEffect(() => {
          const handleResize = () => setViewportWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);

    const progressToNextTier = 60; // in percent

  return (
    <>
             <div className="user-container">
                <div className="user-det-sec">
                    <div className="user-profile-one">
                        <img src={UserProfile} alt="User Profile Picture" />
                        {viewportWidth < 744 ? <img src={EditProfile} onClick={onEditProfile} alt="Edit Profile" /> : <p className="edit-profile-btn" onClick={onEditProfile}>Edit Profile</p>}
                    </div>
                    {viewportWidth < 1360 && <div className="user-profile-two">
                        <div className="user-det">
                            <div className="">
                                <p className="user-super-fix">Username</p>
                                <p className="user-sub-fix">James Naga Bond</p>
                            </div>
                            <div className="">
                                <p className="user-super-fix">Tier</p>
                                <div className="user-tier-badge">
                                    <p>Explorer</p>
                                </div>
                            </div>
                        </div>
                        <div className="user-det">
                            <div>
                                <p className="user-super-fix">Fortune</p>
                                <div className="user-det-fortune">
                                    <p className="user-sub-fix">600</p>
                                    <img src={Fortune} alt="Fortune coins" />
                                </div>
                            </div>
                            <div className="user-cashout">
                                <p>Cashout</p>
                                <img src={Cashout} alt="Cashout icon" />
                            </div>
                        </div>
                    </div>}
                    {viewportWidth > 1359 && <div className="user-profile-two">
                        <div className="user-desk-det-one">
                                <div className="">
                                    <p className="user-sub-fix">James Naga Bond</p>
                                </div>
                                <div className="">
                                    <div className="user-tier-badge">
                                        <p>Explorer</p>
                                    </div>
                                </div>
                                <div className="user-det-fortune">
                                    <p className="user-sub-fix">600</p>
                                    <img src={Fortune} alt="Fortune coins" />
                                </div>
                                <div className="user-cashout">
                                    <p>Cashout</p>
                                    <img src={Cashout} alt="Cashout icon" />
                                </div>
                        </div>
                        <div className="user-desk-det-two">
                            <div className="user-next-tier">
                                <div className="next-tier-head">
                                    <p className="user-super-fix">Next Tier</p>
                                </div>
                                <div className="next-tier-progress-wrapper">
                                    <div className="next-tier-bar">
                                        <div className="next-tier-bar-fill" style={{ width: `${progressToNextTier}%` }}></div>
                                    </div>
                                    <div className="user-tier-badge user-next-tier-badge">
                                        <p>Titan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                {viewportWidth < 1024 && <div className="user-next-tier">
                    <div className="next-tier-head">
                        <p className="user-super-fix">Next Tier</p>
                    </div>
                    <div className="next-tier-progress-wrapper">
                        <div className="next-tier-bar">
                            <div className="next-tier-bar-fill" style={{ width: `${progressToNextTier}%` }}></div>
                        </div>
                        <div className="user-tier-badge user-next-tier-badge">
                            <p>Titan</p>
                        </div>
                    </div>
                </div>}
             </div>
    </>
  );
};

export default UserDetails;
