import React, { useState } from "react";
import "./editProfile.css"
import CloseCard from "../../assets/prof-card-close.svg"
import Avatar from "../../assets/inv-avatar.svg"
import Copy from "../../assets/copy-link.svg"
import AvatarOne from "../../assets/avatar-one.webp"
import AvatarTwo from "../../assets/avatar-two.webp"
import AvatarThree from "../../assets/avatar-three.webp"
import AvatarFour from "../../assets/avatar-four.webp"
import AvatarFive from "../../assets/avatar-five.webp"
import AvatarSix from "../../assets/avatar-six.webp"
import AvatarSeven from "../../assets/avatar-seven.webp"
import AvatarEight from "../../assets/avatar-eight.webp"

const EditProfile = ({ onClose }) => {
    const avatarImagesOne = [AvatarOne, AvatarTwo, AvatarThree, AvatarFour];
    const avatarImagesTwo = [AvatarFive, AvatarSix, AvatarSeven, AvatarEight];

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleAvatarClick = (img) => {
        setSelectedAvatar(img);
    };

    return (
            <div className="edit-inv-container">
                <div className="edit-inv-head"  onClick={onClose}>
                    <img src={CloseCard} alt="Close" />
                </div>
                <div className="edit-inv-main">
                    <form action="">
                        <div className="edit-inv-layout-one">
                            <div className="dp-layout">
                                <div className="edit-inv-dp">
                                    <img src={Avatar} alt="Avatar" />
                                </div>
                            </div>
                            <div className="edit-inv-form">
                                <div className="edit-inv-input-item">
                                    <label htmlFor="invNickname">Nick name</label>
                                    <input type="text" className="unstyled-inputs" name="invNickname" id="invNickname" defaultValue="James Naga Bond" />
                                    <p>Reflects on Investment Profile</p>
                                </div>
                                <div className="inv-referral">
                                    <img src={Copy} alt="Copy" />
                                    <p>Copy Link</p>
                                </div>
                            </div>
                        </div>
                        <div className="edit-inv-layout-two">
                            <div className="edit-inv-avatar">
                                <div className="inv-avatar-head">
                                    <p className="avatar-title">Avatar</p>
                                </div>
                                <div className="avatar-sec-one">
                                    {avatarImagesOne.map((img, idx) => (
                                        <div
                                            className={`avatar-img ${selectedAvatar === img ? 'selected-avatar' : ''}`}
                                            key={idx}
                                            onClick={() => handleAvatarClick(img)}
                                        >
                                            <img src={img} alt={`Avatar Option ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className="avatar-sec-two">
                                    {avatarImagesTwo.map((img, idx) => (
                                        <div
                                            className={`avatar-img ${selectedAvatar === img ? 'selected-avatar' : ''}`}
                                            key={idx}
                                            onClick={() => handleAvatarClick(img)}
                                        >
                                            <img src={img} alt={`Avatar Option ${idx + 5}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="edit-inv-btn-layout">
                                <div className="edit-inv-save">
                                    <p className="inv-save-btn">Save</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default EditProfile;
