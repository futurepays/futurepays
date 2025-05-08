import React from "react";

const DashLeaderBoard = () => {
  const leaderData = [
    { rank: "1", name: "Nagaraju", tier: "Alpha", direct: 340, location: "Hyderabad", amount: "34,000" },
    { rank: "2", name: "Meena", tier: "Beta", direct: 290, location: "Chennai", amount: "29,500" },
    { rank: "3", name: "Ravi", tier: "Gamma", direct: 260, location: "Bangalore", amount: "26,000" },
    { rank: "4", name: "Anita", tier: "Delta", direct: 230, location: "Delhi", amount: "22,800" },
    { rank: "5", name: "Suresh", tier: "Alpha", direct: 210, location: "Mumbai", amount: "21,500" },
  ];

  return (
    <div className="dash-lead-container">
      <div className="dash-lead-head">
        <p>Leader Board</p>
      </div>

      <div className="dash-lead-table-head">
        <div className="dash-lead-head-item"><p>Rank</p></div>
        <div className="dash-lead-head-item"><p>Name</p></div>
        <div className="dash-lead-head-item"><p>Tier</p></div>
        <div className="dash-lead-head-item"><p>Direct</p></div>
        <div className="dash-lead-head-item"><p>Location</p></div>
        <div className="dash-lead-head-item"><p>Amount</p></div>
        <div className="dash-lead-head-item"><p>ReDirect</p></div>
      </div>

      {leaderData.map((data, index) => (
        <div key={index} className="dash-lead-table-data">
          <div className="dash-lead-data-item"><p>#{data.rank}</p></div>
          <div className="dash-lead-data-item"><p>{data.name}</p></div>
          <div className="dash-lead-data-item"><p>{data.tier}</p></div>
          <div className="dash-lead-data-item"><p>{data.direct}</p></div>
          <div className="dash-lead-data-item"><p>{data.location}</p></div>
          <div className="dash-lead-data-item"><p>{data.amount} Rs</p></div>
          <div className="check-btn"><p>Check</p></div>
        </div>
      ))}
    </div>
  );
};

export default DashLeaderBoard;
