import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import MovieListCard from "../MovieListCard/MovieListCard";

import './moviesList.css'
import {useSearchParams} from "react-router-dom";

const MoviesList:FC = () => {
    const{results} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])

    useEffect(() => {
       // @ts-ignore
        dispatch( moviesActions.getAll(+query.get('page')) );
    }, [query])
    return (
        <div >
            <div className={'movies-list'}>
                {
                    results.map(movie => <MovieListCard key={movie.id} movie = {movie}/> )
                }
            </div>
        </div>
    );
};

export default MoviesList;