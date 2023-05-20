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

    useEffect(() => {
        dispatch(moviesActions.getGenres())

    }, [])

    function clearChosenGenres() {
        dispatch(moviesActions.clearGenresForMovies());
        navigate('/movies');
    }

    return (
        <div className={'filters'}>
            {JSON.stringify(chosenGenres)}
            <button onClick={() => clearChosenGenres()}>clear</button>
            {
                genres.map(genre => (<GenreBadge key={genre.id} id={genre.id} name={genre.name}/>))
            }
        </div>
    );
};

export default Filters;