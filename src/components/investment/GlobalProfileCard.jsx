import React from "react";
import "./global.css"
import CardClose from "../../assets/prof-card-close.svg"
import Avatar from "../../assets/avatar-one.webp"
import RankBadge from "../../assets/global-rank.svg"

const GlobalProfileCard = ({ user, onClose }) => {
    if (!user) return null;

  return (
    <>
        <div className="glob-prof-card-container">
            <div className="glob-prof-card-close" onClick={onClose}>
                <img src={CardClose} alt="Close" />
            </div>
            <div className="glob-prof-img">
                <img src={Avatar} alt="Avatar" />
            </div>
            <div className="glob-prof-det">
                <div className="glob-rank-sec">
                    <div className="rank-badge-wrapper">
                                            {user.rank <= 3 ? (
                                              <>
                                                <img src={RankBadge} alt="Rank Badge" />
                                                <span className="rank-number" style={{color: "#ffc83d"}}>{user.rank}</span>
                                              </>
                                            ) : (
                                              <span className="rank-number" style={{color: "#f5f5f5"}}>#{user.rank}</span>
                                            )}
                                          </div>
                    <p className="glob-user-name">{user.name}</p>
                </div>
                <p className="glob-name-tag">Death Racer</p>
                <div className="glob-ref">
                    <p className="dir-ref">Direct Referral</p>
                    <p className="dir-ref-amount">{300}</p>
                </div>
                <p className="glob-user-loc">Hyderabad</p>
                <div className="glob-user-tier-badge">
                    <p>{user.tier}</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default GlobalProfileCard;
