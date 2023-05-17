import React from 'react';

import './starsRating.css'

interface StarsRatingProps {
    rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({rating}) => {
    const totalStars = 10;

    return (
        <div className="rating">
            <div className={'rating-number'}>{rating}</div>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const filledStar = starValue <= rating || starValue - 0.5 === rating;
                const colorRatingClass = rating >= 8 ? "green" : rating >= 6 ? "orange" : "red"
                const starClassName = filledStar ? `star filled ${colorRatingClass}` : 'star';
                const starIcon = filledStar ? '★' : '☆';

                return (
                    <span
                        key={index}
                        className={starClassName}
                    >
            {starIcon}
          </span>
                );
            })}
        </div>
    );
};

export default StarsRating;
