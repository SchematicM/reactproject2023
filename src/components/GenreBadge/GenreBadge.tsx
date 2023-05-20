import React, {FC} from 'react';

import './genreBadge.css'
import {IGenre} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const GenreBadge: FC<IGenre> = ({name, id}) => {
    const{chosenGenres} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const showFilmsWithGenre = (id: number) => {

        if (window.location.pathname.includes('overview')) {
            const query = `page=1&with_genres=${id}`;
            navigate(`/movies?${query}`);
        } else {
            dispatch(moviesActions.setGenresForMovies(id));
            const updatedChosenGenres = [...chosenGenres, id];
            const query = `page=1&with_genres=${updatedChosenGenres.join(',')}`;
            navigate(`/movies?${query}`);
        }
    }
    return (
        <div className={'genre'}>
            <button className={chosenGenres.includes(id) ? 'active' : ''} onClick={() => showFilmsWithGenre(id)}>{name}</button>
        </div>
    );
};

export default GenreBadge;