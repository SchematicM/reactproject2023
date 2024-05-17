import React, {FC} from 'react';

import {basePosterURL} from "../../constants";
import {IMovies} from "../../interfaces";

import './posterPreview.css';

interface IProps{
    movie: IMovies
}

const PosterPreview:FC<IProps> = ({movie}) => {
    return (
        <div className={'poster-preview'}>
            <img
                loading = "lazy"
                src={basePosterURL+movie.poster_path}
                alt = {movie.title + ' poster'}/>
        </div>
    );
};

export default PosterPreview;