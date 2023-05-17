import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import PosterPreview from "../PosterPreview/PosterPreview";
import StarsRaiting from "../StarsRaiting/StarsRating";

import './movieListCard.css';

interface IProps{
    movie: IMovie
}
const MovieListCard:FC<IProps> = ({movie}) => {
    return (
        <div className={'movie-card'}>
            {movie.original_title}
            <PosterPreview movie={movie}/>
            <StarsRaiting rating={movie.vote_average}/>
        </div>
    );
};

export default MovieListCard;