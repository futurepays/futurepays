import React from "react";
import "./dashboard.css";
import Rupee from "../../assets/dash-rupee.svg"
import Inc from "../../assets/dash-fin-inc.svg";
import Users from "../../assets/dash-sales-users.svg";
import SignUps from "../../assets/dash-sales-signups.svg";
import Orders from "../../assets/dash-sales-order.svg";
import Sales from "../../assets/dash-sales-sales.svg";
import RemInc from "../../assets/dash-inc.svg";
import RemDec from "../../assets/dash-dec.svg";

const DashSales = () => {
  return (
    <>
        <div className="fin-container">
                    <div className="fin-head">
                        <div className="fin-title">
                            Salees
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
                                    <div className="fin-amt-extra">
                                        <p>Total Active Users</p>
                                        <div className="fin-amt-count">
                                            <p>40000</p>
                                            {/* <img src={Rupee} alt="Rupee" /> */}
                                        </div>
                                    </div>
                                    <div className="fin-amt-img-sales">
                                        <img src={Users} alt="Users" />
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
                                    <div className="fin-amt-extra">
                                        <p>New Sign ups</p>
                                        <div className="fin-amt-count">
                                            <p>40000</p>
                                            {/* <img src={Rupee} alt="Rupee" /> */}
                                        </div>
                                    </div>
                                    <div className="fin-amt-img-sales">
                                        <img src={SignUps} alt="SignUps" />
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
                                    <div className="fin-amt-extra">
                                        <p>Total Order</p>
                                        <div className="fin-amt-count">
                                            <p>40000</p>
                                            {/* <img src={Rupee} alt="Rupee" /> */}
                                        </div>
                                    </div>
                                    <div className="fin-amt-img-sales">
                                        <img src={Orders} alt="Orders" />
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
                                    <div className="fin-amt-extra">
                                        <p>Total Sales</p>
                                        <div className="fin-amt-count">
                                            <p>40000</p>
                                            {/* <img src={Rupee} alt="Rupee" /> */}
                                        </div>
                                    </div>
                                    <div className="fin-amt-img-sales">
                                        <img src={Sales} alt="Sales" />
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

export default DashSales;
