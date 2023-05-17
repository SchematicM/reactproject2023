import React, {FC} from 'react';

import {basePosterURL} from "../../constants";

import './posterPreview.css';
import {IMovies} from "../../interfaces";

interface IProps{
    movie: IMovies
}

const PosterPreview:FC<IProps> = ({movie}) => {
    return (
        <div>
            <img src={basePosterURL+movie.poster_path} alt = {movie.title + ' poster'}/>
        </div>
    );
};

export default PosterPreview;