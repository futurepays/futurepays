import React from "react";
import FooterLogo from "../../assets/logo.svg"
import FooterLogoText from "../../assets/footer-logo-text.png"
import Instagram from "../../assets/instagram.svg"
import Facebook from "../../assets/facebook.svg"
import Youtube from "../../assets/youtube.svg"
import LinkedIn from "../../assets/linkedin.svg"

const Footer = () => {
  return (
    <>
        <div className="footer-container">
          <div className="footer-head">
            <div className="footer-head-logo">
              <img src={FooterLogo} alt="Future Pays Footer Logo" />
              <img src={FooterLogoText} alt="Future Pays Footer Logo Text" />
            </div>
            <div className="footer-head-tag">
              <p className="footer-tags">Invest</p>
              <p className="footer-tags">Earn</p>
              <p className="footer-tags">Unlock</p>
            </div>
          </div>
          <div className="footer-policy-sec">
  <a href="" className="footer-policies">Terms & Conditions</a>
  <a href="" className="footer-policies">Privacy Policy</a>
  <a href="" className="footer-policies">No Refund Policy</a>

  <div className="footer-policy-wrapper">
    <a href="" className="footer-policies">Earning Disclaimer</a>
    <a href="" className="footer-policies">Income Tax Compliance</a>
  </div>
</div>

          <div className="footer-socials">
            <div className="footer-social-icons">
              <img src={Instagram} alt="Future Pays Instagram" />
            </div>
            <div className="footer-social-icons">
              <img src={Facebook} alt="Future Pays Facebook" />
            </div>
            <div className="footer-social-icons">
              <img src={Youtube} alt="Future Pays Youtube" />
            </div>
            <div className="footer-social-icons">
              <img src={LinkedIn} alt="Future Pays LinkedIn" />
            </div>
          </div>
          <div className="footer-copyrights">
            <p>Copyright 2025 All rights reserved to Future pays </p>
          </div>
        </div>
    </>
  );
};

export default Footer;
