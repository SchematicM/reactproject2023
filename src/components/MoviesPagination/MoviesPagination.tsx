import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import './moviesPagination.css';

const MoviesPagination:FC = () => {
    const {page,total_pages} = useAppSelector(state => state.moviesReducer);
    const [query,setQuery] = useSearchParams();
    const currentPage = Number(query.get('page')) || 1;

    const prev = () => {
        setQuery((prevQuery) => {
            const newQuery = new URLSearchParams(prevQuery);
            newQuery.set('page', String(currentPage - 1));
            return newQuery;
        })    }
    const next = ()=>{
        setQuery((prevQuery) => {
            const newQuery = new URLSearchParams(prevQuery);
            newQuery.set('page', String(currentPage + 1));
            return newQuery;
        })
    }
    return (
        <div className={'pagination'}>
            <button disabled={page === 1} onClick={prev}> &lt; </button>
            <button disabled={page===500||page === total_pages} onClick={next}>&gt;</button>
        </div>
    );
};

export default MoviesPagination;