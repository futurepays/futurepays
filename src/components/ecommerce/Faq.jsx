import React, { useState } from "react";
import "./faq.css"
import SendArrow from "../../assets/pay-arrow.svg";
import FaqDrop from "../../assets/faq-drop.svg";
import FaqNew from "../../assets/faq-new.png";

const faqData = [
    {
      question: "How do I start earning with Future Pays?",
      answer:
        "Simply purchase your exclusive Future Pays T-shirt to unlock your earning dashboard, access your wallet, and begin referring friends. Each successful referral boosts your progress toward new rewards and levels.",
    },
    {
      question: "When will I receive my rewards?",
      answer:
        "Rewards will be added to your wallet instantly once a referral is confirmed. You can track it live through your dashboard.",
    },
    // Add more as needed
  ];


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    
  return (
    <>
        <div className="faq-container">
            <div className="faq-head">
                <p className="faq-title">Frequently Asked Questions</p>
            </div>
            <div className="faq-content">
                <div className="faq-desk">
                    {faqData.map((item, index) => (
                        <div className="faq-qa-pair" key={index}>
                            <div className="faq-que-card" onClick={() => toggleFaq(index)}>
                                <p className="faq-que">{item.question}</p>
                                <div className="faq-drop">
                                    <img
                                        src={FaqDrop}
                                        alt="FAQ Dropdown Icon"
                                        style={{
                                            transform: openIndex === index ? "rotate(180deg)" : "rotate(0)",
                                            transition: "transform 0.3s ease",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`faq-ans-card ${ openIndex === index ? "show" : "hide"}`}>
                                <p className="faq-ans">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="faq-new">
                    <div className="faq-new-head">
                        <img src={FaqNew} alt="New FAQ" />
                        <p className="faq-new-title">Any Questions?</p>
                        <p className="faq-new-tag">You can ask anything you want to know, feel free to dive in</p>
                    </div>
                    <div className="faq-new-form">
                        <form action="">
                            <div className="faq-input-item">
                                <label htmlFor="newFaq">Let me know</label>
                                <input type="text" className="unstyled-inputs" id="newFaq" name="newFaq" placeholder="Enter here" />
                            </div>
                            <div className="faq-btn">
                                <p className="faq-send-btn">Send</p>
                                <img src={SendArrow} alt="FAQ Send Arrow" />
                            </div>
                        </form>
                    </div>
                    <div className="faq-query">
                        <p className="faq-query-head">Contact Support</p>
                        <p className="faq-query-num">Phone: 794561230</p>
                        <p className="faq-query-email">Email ID: helpdesk@futurepays.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Faq;
