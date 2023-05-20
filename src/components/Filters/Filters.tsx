import React, {FC, useEffect} from 'react';

import './filters.css'
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import GenreBadge from "../GenreBadge/GenreBadge";
import {useNavigate} from "react-router-dom";


const Filters: FC = () => {
    const {genres} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const with_genres = searchParams.get('with_genres');

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    useEffect(() => {
        dispatch(moviesActions.getGenres());
        with_genres && dispatch(moviesActions.getChosenGenresFromQuery(with_genres))
    }, [])

    const clearChosenGenres = () => {
        dispatch(moviesActions.clearGenresForMovies());
        navigate('/movies');
    }
    const getRatedMovies = () =>{
        dispatch(moviesActions.getRatedMovies({page:params.page, query:params.with_genres}));
    }

    return (
        <div className={'filters'}>
            <button onClick={()=>getRatedMovies()}>
                sort by rating
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