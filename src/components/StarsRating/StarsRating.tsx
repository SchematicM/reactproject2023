import React from 'react';

import './starsRating.css'

interface StarsRatingProps {
    rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({rating}) => {
    const totalStars = 10;
    const roundedRating = rating.toFixed(1);

    function getStarClass(rating: number, starValue: number): [string, string] {
        const starFillTypeClass =  (rating - starValue) < 0 ? "half" : "filled";
        const starColorRatingClass = rating >= 8 ? "green" : rating >= 6 ? "orange" : "red";

        return [starFillTypeClass, starColorRatingClass];
    }

    return (
        <div className="rating">
            <div className={'box rating-number'}>{roundedRating}</div>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const ifFilledStar = starValue < rating + 1;
                const [starFillTypeClass, starColorRatingClass] = getStarClass(rating, starValue);
                const starClassName = ifFilledStar ? `box star ${starFillTypeClass} ${starColorRatingClass}` : 'star';

                return (
                    <span key={index} className={starClassName}></span>
                );
            })}
        </div>
    );
};

export default StarsRating;
