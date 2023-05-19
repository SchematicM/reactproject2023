import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import MovieListCard from "../MovieListCard/MovieListCard";

import './moviesList.css'
import {IQuery} from "../../interfaces";


const MoviesList: FC = () => {
    const {results} = useAppSelector((state) => state.moviesReducer);
    const dispatch = useAppDispatch();
    const location = useAppLocation<IQuery>();
    const searchParams = new URLSearchParams(location.search);
    let page = searchParams.get('page');
    const query = searchParams.get('query');
    const with_genres = searchParams.get('with_genres');
    useEffect(() => {
        if (!page) {
            page = '1';
            searchParams.set('page', page);
        } else if (query) {
            dispatch(moviesActions.searchMovies({ query, page }));
            return;
        }
        else if(with_genres){
            dispatch(moviesActions.getMoviesByGenre({ query:with_genres, page }));
            return;
        }
        dispatch(moviesActions.getAll(+page));
    }, ([page,query,with_genres]));



    return (
        <div>
            {
                results &&
                <div className={'movies-list'}>
                    {results.map((movie) => (
                        <MovieListCard key={movie.id} movie={movie}/>
                    ))}
                </div>}
        </div>
    );
};


export default MoviesList;