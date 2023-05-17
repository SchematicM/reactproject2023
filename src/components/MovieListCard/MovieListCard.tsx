import React, {FC} from 'react';

import {IMovies} from "../../interfaces";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRaiting from "../StarsRaiting/StarsRating";

import './movieListCard.css';
import {useNavigate} from "react-router-dom";

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
            <StarsRaiting rating={movie.vote_average}/>
            </div>
        </div>
    );
};

export default MovieListCard;