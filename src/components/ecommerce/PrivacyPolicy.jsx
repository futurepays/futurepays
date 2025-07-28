import React from "react";
import Close from "../../assets/close-policy.svg"

const PrivacyPolicy = ({ onClose }) => {

    // const closePolicyTab = () => {
    //     setOpenPolicy(false)
    // }

  return (
    <>
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="pol-nav">
                    <p className="pol-nav-text">Privacy Policy - Future Pays</p>
                    <img src={Close} onClick={onClose} style={{ cursor: 'pointer' }} alt="Close" />
                </div>
                <div className="pol-head">
                    <div className="pol-date">
                        <span className="bold">Effective date:</span>
                        <span className="bold"> 27/07/2025</span>
                    </div>
                    <p className="pol-text">At Future Pays, we value your trust. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform or purchase our products.</p>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">1. Information We Collect</p>
                        <p className="pol-content-text">We may collect the following types of personal information:</p>
                    </div>
                    <div className="pol-content-sub-sec">
                        <p className="pol-title">A. Personal Data You Provide</p>
                        <ul>
                            <li className="pol-content-text">Full Name</li>
                            <li className="pol-content-text">Phone Number</li>
                            <li className="pol-content-text">Email Address</li>
                            <li className="pol-content-text">Shipping Address</li>
                            <li className="pol-content-text">Referral Code (If Applicable)</li>
                            <li className="pol-content-text">Payment Information (processed by secure payment gateways)</li>
                        </ul>
                    </div>
                    <div className="pol-content-sub-sec">
                        <p className="pol-title">B. Automatic Data Collection</p>
                        <ul>
                            <li className="pol-content-text">IP Address</li>
                            <li className="pol-content-text">Device Information</li>
                            <li className="pol-content-text">App Usage Patterns</li>
                            <li className="pol-content-text">Shipping Address</li>
                            <li className="pol-content-text">Location Data (if you allow)</li>
                        </ul>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">2. How We Use Your Information</p>
                        <p className="pol-content-text">We use your data to:</p>
                    </div>
                    <div className="pol-content-sub-sec">
                        <ul>
                            <li className="pol-content-text">Deliver your product (T-shirt)</li>
                            <li className="pol-content-text">Track referrals and reward eligibility</li>
                            <li className="pol-content-text">Send payment confirmations and updates</li>
                            <li className="pol-content-text">Improve our services and offers</li>
                            <li className="pol-content-text">Prevent fraud or abuse</li>
                            <li className="pol-content-text">Comply with legal requirements</li>
                        </ul>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">3. Sharing of Information</p>
                        <p className="pol-content-text">We <span className="bold">do not sell</span> your personal data to third parties. We only share information:</p>
                    </div>
                    <div className="pol-content-sub-sec">
                        <ul>
                            <li className="pol-content-text">With trusted partners (e.g., payment processors, courier services)</li>
                            <li className="pol-content-text">To comply with legal obligations (e.g., court orders)</li>
                            <li className="pol-content-text">In case of a business acquisition or merger (users will be notified)</li>
                        </ul>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">4. Data Retention</p>
                        <p className="pol-content-text">We retain your data as long as your account is active or as needed to fulfill legal, financial, or business obligations.</p>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">5. Your Rights</p>
                        <p className="pol-content-text">You may:</p>
                    </div>
                    <div className="pol-content-sub-sec">
                        <ul>
                            <li className="pol-content-text">Request to view or delete your data</li>
                            <li className="pol-content-text">Opt-out of non-essential notifications</li>
                            <li className="pol-content-text">Contact us for any data-related concern at: <span className="bold">support@futurepays.in</span></li>
                        </ul>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">6. Security Measures</p>
                        <p className="pol-content-text">We use:</p>
                    </div>
                    <div className="pol-content-sub-sec">
                        <ul>
                            <li className="pol-content-text">End-to-end encryption</li>
                            <li className="pol-content-text">Secure server environments</li>
                            <li className="pol-content-text">Role-based access controls</li>
                            <li className="pol-content-text">Regular data audits</li>
                        </ul>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">7. Children’s Privacy</p>
                        <p className="pol-content-text">Future Pays is intended for users aged 18 and above. We do not knowingly collect data from minors.</p>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">8. Policy Updates</p>
                        <p className="pol-content-text">This policy may change from time to time. All changes will be posted on this page with the updated date. Please review periodically.</p>
                    </div>
                </div>
                <div className="pol-content">
                    <div className="pol-content-head-sec">
                        <p className="pol-title">9. Contact Us</p>
                        <p className="pol-content-text">If you have any questions or concerns, contact us at:</p>
                        <p className="bold">support@futurepays.in</p>
                        <p><span className="bold">Address:</span> 5-16, Near Grampanchayat, Lalgadi, Malapert, Bomraspet, K.v.rangareddy, Rangareddy, Telangana, India, 500078 click Here For All The Companies At 500078 | Close</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default PrivacyPolicy;
