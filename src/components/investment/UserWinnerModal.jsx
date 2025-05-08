import React from "react";
import "./modals.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const UserWinnerModal = () => {
  return (
    <>
        <div className="modal-container">
            <div className="modal-animation">
                <DotLottieReact src="https://lottie.host/1d5a7212-f3b3-4e3a-87a9-d6c1edd217d5/3cDi8vAWiL.lottie" loop autoplay />
            </div>
        </div>
    </>
  );
};

export default UserWinnerModal;
