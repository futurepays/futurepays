import React from "react";
import Rating from "../../assets/rating.svg"
import RatingStars from "../../assets/group-rating.svg"

const Reviews = () => {
  return (
    <>
        <div className="rr-container">
            <div className="rating-container">
                <p className="rating-head">Ratings</p>
                <div className="rating-count-sec">
                    <p className="rating-count-num">4.4</p>
                    <img src={Rating} alt="Product Rating Star" />
                </div>
            </div>
            <div className="review-container">
                <p className="review-head">Customer Reviews</p>
                <div className="review-sec">
                    <div className="review-desc">
                        <p className="review-brief">Nice product, Loved it</p>
                        <img src={RatingStars} alt="Customer review stars" />
                    </div>
                    <div className="review-user-det">
                        <p className="review-user-name">Nagaraju</p>
                        <p className="review-date">20 Jan 2025</p>
                    </div>
                </div>
                <div className="review-sec">
                    <div className="review-desc">
                        <p className="review-brief">Once i bought then full money i got, thanks future pays</p>
                        <img src={RatingStars} alt="Customer review stars" />
                    </div>
                    <div className="review-user-det">
                        <p className="review-user-name">Nagaraju</p>
                        <p className="review-date">20 Jan 2025</p>
                    </div>
                </div>
                <div className="review-sec">
                    <div className="review-desc">
                        <p className="review-brief">Adem review ra naina</p>
                        <img src={RatingStars} alt="Customer review stars" />
                    </div>
                    <div className="review-user-det">
                        <p className="review-user-name">Nagaraju</p>
                        <p className="review-date">20 Jan 2025</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Reviews;
