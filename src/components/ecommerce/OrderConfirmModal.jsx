import React from "react";
import "./modals.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const OrderConfirmModal = () => {
  return (
    <>
        <div className="order-modal-container">
            <div className="order-modal">
                <div className="order-head">
                    <p className="order-title">Order Confirm</p>
                </div>
                <div className="order-animation-sec">
                    <DotLottieReact src="https://lottie.host/1f165a09-e00b-4a12-bac2-92aeb04f3cd2/urH9WGPYGt.lottie" loop autoplay />
                </div>
                <div className="order-congrats">
                    <p className="congrats-text">Congratulations! Your Future Pays T-shirt is booked! 🎽🚀 Unlock wealth and new opportunities!</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default OrderConfirmModal;
