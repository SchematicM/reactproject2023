import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../hooks";

import './moviesPagination.css';

const MoviesPagination:FC = () => {
    const {page,total_pages} = useAppSelector(state => state.moviesReducer);
    const [query,setQuery] = useSearchParams();
    const currentPage = Number(query.get('page')) || 1;

    const prev = () => {
        setQuery((prevQuery) => {
            const newQuery = new URLSearchParams(prevQuery);
            newQuery.set('page', String(currentPage - 1));
            window.scrollTo(0, 0);
            return newQuery;
        })    }
    const next = ()=>{
        setQuery((prevQuery) => {
            const newQuery = new URLSearchParams(prevQuery);
            newQuery.set('page', String(currentPage + 1));
            window.scrollTo(0, 0);
            return newQuery;
        })
    }
    return (
        <div className={'pagination'}>
            <button disabled={page === 1} onClick={prev}><i className="fa-solid fa-arrow-left"></i> </button>
            <button disabled={page===500||page === total_pages||total_pages===0} onClick={next}><i
                className="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default MoviesPagination;