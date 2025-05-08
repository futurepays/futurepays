import React, { useEffect, useState } from "react";
import "./global.css"
import UserImage from "../../assets/global-user-image.svg"
import RankBadge from "../../assets/global-rank.svg"
import Fortune from "../../assets/fortune.svg"
import Complete from "../../assets/level-complete.svg"
import Locked from "../../assets/level-locked.svg"
import GlobalProfileCard from "./GlobalProfileCard";

const leaderboardData = [
    {
      id: 1,
      name: "Nagaraju",
      rank: 1,
      referrals: 300,
      location: "Hyderabad",
      tier: "Titan",
      image: UserImage,
    },
    {
      id: 2,
      name: "Karthik",
      rank: 2,
      referrals: 290,
      location: "Delhi",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 3,
      name: "Meena",
      rank: 3,
      referrals: 270,
      location: "Mumbai",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 4,
      name: "Ravi",
      rank: 4,
      referrals: 250,
      location: "Chennai",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 5,
      name: "Priya",
      rank: 5,
      referrals: 230,
      location: "Bangalore",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 6,
      name: "Akash",
      rank: 6,
      referrals: 210,
      location: "Pune",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 7,
      name: "Divya",
      rank: 7,
      referrals: 200,
      location: "Kolkata",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 8,
      name: "Sameer",
      rank: 8,
      referrals: 180,
      location: "Ahmedabad",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 9,
      name: "Anjali",
      rank: 9,
      referrals: 170,
      location: "Jaipur",
      tier: "Explorer",
      image: UserImage,
    },
    {
      id: 10,
      name: "Rahul",
      rank: 10,
      referrals: 150,
      location: "Lucknow",
      tier: "Explorer",
      image: UserImage,
    },
    {
        id: 11,
        name: "Ritika Sharma",
        rank: 11,
        referrals: 96,
        location: "Indore",
        tier: "Silver",
        image: UserImage,
      },
      {
        id: 12,
        name: "Kunal Reddy",
        rank: 12,
        referrals: 88,
        location: "Hyderabad",
        tier: "Bronze",
        image: UserImage,
      },
      {
        id: 13,
        name: "Ayesha Iqbal",
        rank: 13,
        referrals: 103,
        location: "Lucknow",
        tier: "Gold",
        image: UserImage,
      },
      {
        id: 14,
        name: "Siddharth Verma",
        rank: 14,
        referrals: 77,
        location: "Noida",
        tier: "Bronze",
        image: UserImage,
      },
      {
        id: 15,
        name: "Shruti Desai",
        rank: 15,
        referrals: 120,
        location: "Nagpur",
        tier: "Titan",
        image: UserImage
      }
      
  ];

  const getUserRowStyle = (rank) => {
    // Top 3 users with special gradient backgrounds
    if (rank === 1) {
        return {
            borderRadius: '5.684px',
            background: 'linear-gradient(90deg, #D8CC4A 0%, #71692E 20.01%, #2E2731 25.89%)'
        };
    } else if (rank === 2) {
        return {
            borderRadius: '5.684px',
            background: 'linear-gradient(90deg, #FAB465 0%, #C99459 20.01%, #1E1920 25.89%)'
        };
    } else if (rank === 3) {
        return {
            borderRadius: '5.684px',
            background: 'linear-gradient(90deg, #C5A42F 0%, #564F36 20.01%, #2E2731 25.89%)'
        };
    } else if (rank % 2 === 1) {
        // All odd-numbered ranks (except top 3)
        return {
            borderRadius: '5.684px',
            background: '#2E2731'
        };
    }
    return {}; // Default
};

  

const GlobalTables = () => {
    const [activeTab, setActiveTab] = useState("leaderboard");
    const [selectedUser, setSelectedUser] = useState(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

const handleUserClick = (user) => {
  setSelectedUser(user);
};

const handleCloseProfile = () => {
  setSelectedUser(null);
};


    
      useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <>
        <div className="lead-board-container">
            <div className="board-head">
                <p 
                  className={`board-head-title ${activeTab === "leaderboard" ? "active-tab" : ""}`}
                  onClick={() => setActiveTab("leaderboard")}
                >
                  Global Leader Board
                </p>
                <p 
                  className={`board-head-title ${activeTab === "income" ? "active-tab" : ""}`}
                  onClick={() => setActiveTab("income")}
                >
                  Global Income
                </p>
            </div>
            {activeTab === "leaderboard" && (<div className="global-leader-board-table">
              <div className="board-table-head">
                  <div className="board-head-item">
                      <p>Profile</p>
                  </div>
                  <div className="board-head-item">
                      <p>Rank</p>
                  </div>
                  <div className="board-head-item">
                      <p>Name</p>
                  </div>
                  {viewportWidth > 1023 && (
                      <>
                          <div className="board-head-item"><p>Direct Referral</p></div>
                          <div className="board-head-item"><p>Location</p></div>
                      </>
                  )}
                  <div className="board-head-item"><p>Tier</p></div>
              </div>
              <div className="board-main-content">
                {leaderboardData.map((user) => (
                  <div
                    className="board-user-row"
                    key={user.rank}
                    style={getUserRowStyle(user.rank)}
                    onClick={() => handleUserClick(user)}>
                    <div className="board-user-item">
                      <img className="board-user-img" src={user.image} alt={user.name} />
                    </div>
                    <div className="board-user-item">
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
                    </div>
                    <div className="board-user-item">
                      <p>{user.name}</p>
                    </div>
                    {viewportWidth > 1023 && (
                      <>
                        <div className="board-user-item">
                          <p>{user.referrals}</p>
                        </div>
                        <div className="board-user-item">
                          <p>{user.location}</p>
                        </div>
                      </>
                    )}
                    <div className="board-user-item">
                      <div className="lead-board-user-tier-badge">
                        <p>{user.tier}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>)}
            {activeTab === "income" && (<div className="global-income-table">
              <div className="glob-income-head">
                <div className="income-head-item">
                  <p>Your Level - <span className="income-item-value">3</span></p>
                </div>
                <div className="income-head-item">
                  <p>Level Income - <span className="income-item-value">800</span><span className="income-value-img"><img src={Fortune} alt="" /></span></p>
                </div>
              </div>
              <div className="income-main-content">
                <div className="level-layout">
                  <p className="level">Level - 3</p>
                  <div className="level-complete">
                    <p>Level Completed</p>
                    <img src={Complete} alt="Complete" />
                  </div>
                </div>
                <div style={{marginTop: "20px"}}></div>
                <div className="level-layout">
                  <p className="level">Level - 4</p>
                  <div className="level-locked">
                    <img src={Locked} alt="Complete" />
                    <p>Locked</p>
                  </div>
                </div>
                <div style={{marginTop: "20px"}}></div>
                <div className="level-layout">
                  <p className="level">Level - 5</p>
                  <div className="level-bar"></div>
                  <div className="level-bar-amount">56/64</div>
                </div>
              </div>
            </div>)}
        </div>
        {selectedUser && (
  <GlobalProfileCard user={selectedUser} onClose={handleCloseProfile} />
)}

    </>
  );
};

export default GlobalTables;
