import React, { useEffect, useState } from "react";
import "./editProfile.css"

export const EditProfile = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [phone, setPhone] = useState("9876543210");
  const [email, setEmail] = useState("naharaju@gmail.com");
  const [phoneChanged, setPhoneChanged] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneChanged(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailChanged(true);
  };

  const verifyPhoneOtp = () => {
    console.log("Verifying phone OTP...");
  };

  const verifyEmailOtp = () => {
    console.log("Verifying email OTP...");
  };

  return (
    <>
        <div className="edit-container">
            <div className="edit-head">
                <p className="edit-title">Personal Details</p>
            </div>
            <div className="edit-form">
                <form action="">
                    <div className="edit-user-sec">
                        <div className="edit-input-row">
                            <div className="edit-input-item">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" className="unstyled-inputs" placeholder="Naharaju" />
                            </div>
                            <div className="edit-input-item">
                                <label htmlFor="nickName">Nick Name</label>
                                <input type="text" id="nickName" name="nickName" className="unstyled-inputs" placeholder="Naha" />
                            </div>
                        </div>
                        <div className="edit-input-row edit-verify-row">
                            <div className="edit-input-item">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" id="phone" name="fullName" className="unstyled-inputs no-spinner" placeholder={"9876543210"} value={phone} onChange={handlePhoneChange} />
                            </div>
                            <div className="edit-input-item verify-layout">
                                <label htmlFor="mobileOtp">Verify OTP</label>
                                <input type="text" id="mobileOtp" name="mobileOtp" className="unstyled-inputs" placeholder="******" disabled={!phoneChanged} />
                                {viewportWidth < 1024 && <button className="verify-btn" type="button" disabled={!phoneChanged} onClick={verifyPhoneOtp}>Verify</button>}
                            </div>
                            {viewportWidth  > 1023 && <button className="verify-btn" type="button" disabled={!phoneChanged} onClick={verifyPhoneOtp}>Verify</button>}
                        </div>
                        <div className="edit-input-row edit-verify-row">
                            <div className="edit-input-item">
                                <label htmlFor="mail">Email Id</label>
                                <input type="email" id="mail" name="mail" className="unstyled-inputs" placeholder="naharaju@gmail.com" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="edit-input-item verify-layout">
                                <label htmlFor="emailOtp">Verify OTP</label>
                                <input type="number" id="email" name="email" className="unstyled-inputs no-spinner" placeholder="******" disabled={!emailChanged}  />
                                {viewportWidth <1024 && <button className="verify-btn" type="button" disabled={!emailChanged} onClick={verifyEmailOtp}>Verify</button>}
                            </div>
                            {viewportWidth > 1023 && <button className="verify-btn" type="button" disabled={!emailChanged} onClick={verifyEmailOtp}>Verify</button>}
                        </div>
                    </div>
                    <div className="edit-add-sec">
                        <div className="edit-input-row">
                            <div className="edit-input-item">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" name="state" className="unstyled-inputs" placeholder="Telangana" />
                            </div>
                            <div className="edit-input-item">
                                <label htmlFor="pincode">Pincode</label>
                                <input type="number" id="pincode" name="pincode" className="unstyled-inputs no-spinner" placeholder="Naha" />
                            </div>
                        </div>
                        <div className="edit-input-row">
                            <div className="edit-input-item">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" className="unstyled-inputs" placeholder="Hyderabad" />
                            </div>
                            <div className="edit-input-item">
                                <label htmlFor="district">District</label>
                                <input type="text" id="district" name="district" className="unstyled-inputs" placeholder="Naha" />
                            </div>
                        </div>
                        <div className="edit-input-row">
                            <div className="edit-input-item">
                                <label htmlFor="flatNumber">Flat Number</label>
                                <input type="text" id="flatNumber" name="flatNumber" className="unstyled-inputs" placeholder="Hyderabad" />
                            </div>
                            <div className="edit-input-item">
                                <label htmlFor="locality">Locality</label>
                                <input type="text" id="locality" name="locality" className="unstyled-inputs" placeholder="Naha" />
                            </div>
                        </div>
                    </div>
                    <div className="edit-btns">
                        <div className="edit-save-btn">
                            <p>Save Changes</p>
                        </div>
                        <div className="edit-cancel-btn">
                            <p>Cancel</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};

export default EditProfile;