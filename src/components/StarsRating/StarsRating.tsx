import React from 'react';
import StarRatings from 'react-star-ratings';

import './starsRating.css'

interface StarsRatingProps {
    rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({rating}) => {
    const totalStars = 10;
    const roundedRating = rating.toFixed(1);

    const getStarColor = () => {
        return rating >= 7.5 ? "green" : rating >= 5 ? "orange" : "red";
    }

    const starColor = getStarColor();

    return (
        <div className="rating-container">
            <div className={'rating-number'}>{roundedRating}</div>
            <div className="stars">
                <StarRatings
                    rating={rating}
                    starRatedColor={starColor}
                    numberOfStars={totalStars}
                    starHoverColor="blue"
                    starDimension="25px"
                    starSpacing="5px"
                    name='rating'
                />
            </div>
            <div className="stars-small">
                <StarRatings
                    rating={rating}
                    starRatedColor={starColor}
                    numberOfStars={1}
                    starHoverColor="blue"
                    starDimension="25px"
                    starSpacing="5px"
                    name='rating'
                />
            </div>
        </div>
    );
};

export default StarsRating;