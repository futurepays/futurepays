import React, { useState } from "react";
import Logo from "../assets/logo.png"
import LogoText from "../assets/logo-text.png"
import LoginApparel from "../assets/login-apparel.png"

const SignUp = () => {
    const [activeTab, setActiveTab] = useState("signup");
  return (
    <>
        <div className="sign-desk-container">
            <div className="sign-container">
                <div className="nav-logo">
                    <img src={Logo} alt="Future Pays Logo" />
                    <img src={LogoText} className="logo-text" alt="Future Pays Logo Text" />
                </div>
                <div className="sign-head">
                    <div className="sign-title">
                        <p className="main-title">Invest in your future!</p>
                        <p className="sub-title">Unlock wealth, growth, and endless possibilities — your future starts now!</p>
                    </div>
                    <div className="sign-toggle">
                        <div className={`toggle-button ${activeTab === "signup" ? "active" : "inactive"}`}
                            onClick={() => setActiveTab("signup")}>
                                Sign Up
                        </div>
                        <div className={`toggle-button ${activeTab === "login" ? "active" : "inactive"}`}
                            onClick={() => setActiveTab("login")}>
                                Login
                        </div>
                    </div>
                </div>
                <div className="sign-options">
                    <div className="google">Google</div>
                    <div className="facebook">Facebook</div>
                </div>
                <div className="sign-footer">
                    <p className="sign-terms">By continuing, you agree to Future pays <a href="" style={{color:"#000", textDecoration: "none"}}>Terms of service</a> and <a href="" style={{color:"#000", textDecoration: "none"}}>Privacy Policy</a>.</p>
                </div>
            </div>
            <div className="sign-apparel">
                <img src={LoginApparel} alt="Future Pays E-commerce Apparel" />
                <p className="apparel-text">Get started by purchasing your exclusive T-shirt — your ticket to endless earning opportunities.</p>
            </div>
        </div>
    </>
  );
};

export default SignUp;
