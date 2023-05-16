import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import MovieListCard from "../MovieListCard/MovieListCard";

import './moviesList.css'

const MoviesList:FC = () => {
const{results, page} = useAppSelector(state => state.moviesReducer);
const dispatch = useAppDispatch();

useEffect(() => {
        dispatch(moviesActions.getAll())
    },
    []);
    return (
        <div >
           <h1>Here should be Movies List</h1>
            <div className={'movies-list'}>
            {
                results.map(movie => <MovieListCard key={movie.id} movie = {movie}/> )
            }
            </div>
        </div>
    );
};

export default MoviesList;