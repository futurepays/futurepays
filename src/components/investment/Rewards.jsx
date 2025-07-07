import React from "react";
import "./global.css";
import Congrats from "../../assets/global-congrats.svg"

const Rewards = () => {
  return (
    <>
        <div className="rew-container">
            <div className="rew-head">
                <div className="rew-head-title">
                    <img src={Congrats} alt="#" className="flipped" />
                    <p className="rew-title">Milestone Rewards</p>
                    <img src={Congrats} alt="#" />
                </div>
                <div className="rew-head-tag">
                    <p className="rew-tag">Hit milestones, unlock rewards, and celebrate your success!</p>
                </div>
            </div>
            <div className="rew-progress-container">
                <div className="rew-progress">
                    <img src="" alt="" />
                    <div className="rew-progress-bar"></div>
                </div>
            </div>
            <div className="rew-progress-track">
                <p className="rew-progress-count">12/15</p>
                <p className="rew-progress-text">Unlock your reward</p>
            </div>
        </div>
    </>
  );
};

export default Rewards;
