import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import MovieListCard from "../MovieListCard/MovieListCard";

import './moviesList.css'
import {IQuery} from "../../interfaces";


const MoviesList: FC = () => {
    const { results } = useAppSelector((state) => state.moviesReducer);
    const dispatch = useAppDispatch();
    const location = useAppLocation<IQuery>();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        let page = searchParams.get('page');
        if (!page) {
            page = '1';
            searchParams.set('page', page);
            const newUrl = `${location.pathname}?${searchParams.toString()}`;
            window.history.replaceState(null, '', newUrl);
        }
        dispatch(moviesActions.getAll(+page));
    }, [dispatch, location.search]);

    return (
        <div>
            <div className={'movies-list'}>
                {results.map((movie) => (
                    <MovieListCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};


export default MoviesList;