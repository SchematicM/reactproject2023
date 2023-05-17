import React from 'react';

interface StarsRatingProps {
    rating: number;
    totalStars: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({ rating, totalStars }) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="star-rating">
            {[...Array(filledStars)].map((_, index) => (
                <span key={index} className="star-filled">
          &#9733;
        </span>
            ))}
            {hasHalfStar && (
                <span className="star-half" aria-label="Half star">
          &#9733;
        </span>
            )}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="star-empty">
          &#9734;
        </span>
            ))}
        </div>
    );
};
export default StarsRating;
