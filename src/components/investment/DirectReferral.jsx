import React, { useEffect, useState } from "react";
import "./profile.css";
import ProfileCard from "./ProfileCard";

const DirectReferral = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [users] = useState([
    // {
    //   id: 1,
    //   name: "ABC",
    //   email: "abc@gmail.com",
    //   doj: "11/11/11",
    //   tier: "Explorer",
    // },
    // {
    //   id: 2,
    //   name: "XYZ",
    //   email: "xyz@gmail.com",
    //   doj: "12/12/12",
    //   tier: "Achiever",
    // },
    // Add more users here, or leave empty to test empty case
  ]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewClick = () => {
    setShowProfileCard(true);
  };

  return (
    <div className="ref-container">
      <div className="ref-head">
        <p className="ref-title">Direct Referral</p>
      </div>

      {showProfileCard && <ProfileCard onClose={() => setShowProfileCard(false)} />}

      <div className="ref-table-container">
        <div className="ref-table-head">
          <div className="ref-head-item"><p>S.no</p></div>
          <div className="ref-head-item"><p>Name</p></div>
          {viewportWidth < 744 ? (
            <>
              <div className="ref-head-item"><p>Tier</p></div>
              <div className="ref-head-item"><p>View</p></div>
            </>
          ) : (
            <>
              <div className="ref-head-item"><p>Mail Id</p></div>
              <div className="ref-head-item"><p>DOJ</p></div>
              <div className="ref-head-item"><p>Tier</p></div>
            </>
          )}
        </div>

        <div className="ref-content">
          {users.length === 0 ? (
            <p className="ref-empty-message">Start referring now and unlock endless rewards!</p>
          ) : (
            users.map((user, index) => (
              <div className="ref-main" key={user.id}>
                <div className="ref-main-item"><p>{index + 1}</p></div>
                <div className="ref-main-item"><p>{user.name}</p></div>
                {viewportWidth < 744 ? (
                  <>
                    <div className="ref-main-item"><p>{user.tier}</p></div>
                    <div className="ref-main-item ref-view-btn" onClick={handleViewClick}>
                      <p>View</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="ref-main-item"><p>{user.email}</p></div>
                    <div className="ref-main-item"><p>{user.doj}</p></div>
                    <div className="ref-main-item"><p>{user.tier}</p></div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectReferral;
