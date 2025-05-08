import React from "react";
import "./dashboard.css";
import Rupee from "../../assets/dash-rupee.svg"
import Inc from "../../assets/dash-fin-inc.svg";
import Bal from "../../assets/dash-fin-bal.svg";
import Exp from "../../assets/dash-fin-exp.svg";
import RemInc from "../../assets/dash-inc.svg";
import RemDec from "../../assets/dash-dec.svg";

const DashFinances = () => {
  return (
    <>
        <div className="fin-container">
            <div className="fin-head">
                <div className="fin-title">
                    Finances
                </div>
                <div className="fin-filter">
                    <div className="fin-filter-btn">
                        <p>February</p>
                    </div>
                    <div className="fin-filter-btn">
                        <p>2024</p>
                    </div>
                </div>
            </div>
            <div className="fin-cards-sec">
                    <div className="fin-card">
                        <div className="fin-amt-sec">
                            <div className="fin-amt">
                                <p>Income</p>
                                <div className="fin-amt-count">
                                    <p>40000</p>
                                    <img src={Rupee} alt="Rupee" />
                                </div>
                            </div>
                            <div className="fin-amt-img inc">
                                <img src={Inc} alt="Income" />
                            </div>
                        </div>
                        <div className="fin-card-remark">
                            <span className="fin-rem-pic-rep">
                                <img src={RemInc} alt="Inc" />
                                <span className="fin-rem-per">3%</span>
                            </span>
                            <span className="fin-rem-text">Up from yesterday</span>
                        </div>
                    </div>
                    <div className="fin-card">
                        <div className="fin-amt-sec">
                            <div className="fin-amt">
                                <p>Income</p>
                                <div className="fin-amt-count">
                                    <p>40000</p>
                                    <img src={Rupee} alt="Rupee" />
                                </div>
                            </div>
                            <div className="fin-amt-img exp">
                                <img src={Exp} alt="Expense" />
                            </div>
                        </div>
                        <div className="fin-card-remark">
                            <span className="fin-rem-pic-rep">
                                <img src={RemDec} alt="Dec" />
                                <span className="fin-rem-per">3%</span>
                            </span>
                            <span className="fin-rem-text">Up from yesterday</span>
                        </div>
                    </div>
                    <div className="fin-card">
                        <div className="fin-amt-sec">
                            <div className="fin-amt">
                                <p>Income</p>
                                <div className="fin-amt-count">
                                    <p>40000</p>
                                    <img src={Rupee} alt="Rupee" />
                                </div>
                            </div>
                            <div className="fin-amt-img bal">
                                <img src={Bal} alt="Balance" />
                            </div>
                        </div>
                        <div className="fin-card-remark">
                            <span className="fin-rem-pic-rep">
                                <img src={RemInc} alt="Inc" />
                                <span className="fin-rem-per">3%</span>
                            </span>
                            <span className="fin-rem-text">Up from yesterday</span>
                        </div>
                    </div>
            </div>
        </div>
    </>
  );
};

export default DashFinances;
