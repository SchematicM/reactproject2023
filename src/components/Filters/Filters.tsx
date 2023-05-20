import React, {FC, useEffect} from 'react';

import './filters.css'
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import GenreBadge from "../GenreBadge/GenreBadge";
import {useNavigate} from "react-router-dom";


const Filters: FC = () => {
    const {genres, chosenGenres} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const with_genres = searchParams.get('with_genres');

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.entries(Object.fromEntries(urlSearchParams.entries()))
        .map(([key, value]) => `${key}=${value}`).join('&');


    useEffect(() => {
        dispatch(moviesActions.getGenres());
        with_genres && dispatch(moviesActions.getChosenGenresFromQuery(with_genres))
    }, [])

    useEffect(() => {
        const query = `page=1&with_genres=${chosenGenres.join(',')}`;
        navigate(`/movies?${query}`);
    },[chosenGenres]);

    const clearChosenGenres = () => {
        dispatch(moviesActions.clearGenresForMovies());
        navigate('/movies');
    }
    const getRatedMovies = () => {
        dispatch(moviesActions.getRatedMovies(params));
    }

    return (
        <div className={'filters'}>
            <button onClick={() => getRatedMovies()}>
                Sort by Rating
            </button>
            <h3>Choose Genres:</h3>
            <button onClick={() => clearChosenGenres()}>Clear Genres</button>
            {
                genres.map(genre => (<GenreBadge key={genre.id} id={genre.id} name={genre.name}/>))
            }
        </div>
    );
};

export default Filters;