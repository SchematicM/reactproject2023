import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovies} from "../../interfaces";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRating from "../StarsRating/StarsRating";

import './movieListCard.css';

interface IProps{
    movie: IMovies
}
const MovieListCard:FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {navigate(`/overview/${movie.id}`);}} className={'movie-card'}>
            <PosterPreview movie={movie}/>
            <div className={'movie-info'}>
            {movie.original_title}
            <StarsRating rating={movie.vote_average}/>
            </div>
        </div>
    );
};

export default MovieListCard;