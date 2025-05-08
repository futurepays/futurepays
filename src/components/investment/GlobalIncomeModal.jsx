import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import FortuneTicket from "../../assets/fortune-ticket.svg"
import Fortune from "../../assets/fortune.svg"
import Congrats from "../../assets/global-congrats.svg"

const GlobalIncomeModal = () => {
  return (
    <>
        <div className="glob-modal-container">
            <div className="glob-modal">
                <div className="glob-modal-head">
                    <div className="glob-head-sec">
                        <img src={Congrats} alt="#" className="flipped" /> 
                        <p className="glob-modal-title">Congratulations!</p>
                        <img src={Congrats} alt="#" /> 
                    </div>
                    <p className="glob-modal-tagline">Every milestone brings new rewards!</p>
                </div>
                <div className="glob-modal-animation">
                    <DotLottieReact src="https://lottie.host/6d847db5-8aec-4b4e-874e-23b5f4047406/Lki3ZGmzui.lottie" loop autoplay />
                </div>
                <div className="glob-modal-ticket">
                    <p className="ticket-top">Added to your fortune</p>
                    <div className="ticket-bottom">
                        <p className="">600</p>
                        <img src={Fortune} alt="" />
                    </div>
                    <img src={FortuneTicket} alt="Fortune Ticket" />
                    <div className="ticket-dashed"></div>
                </div>
            </div>
        </div>
    </>
  );
};

export default GlobalIncomeModal;
