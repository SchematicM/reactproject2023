import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import './moviesPagination.css';

const MoviesPagination:FC = () => {
    const {page,total_pages} = useAppSelector(state => state.moviesReducer);
    const [,setQuery] = useSearchParams();
    const prev = () => {
        // @ts-ignore
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')-1}))
    }
    const next = ()=>{
        // @ts-ignore
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')+1}))
    }
    return (
        <div className={'pagination'}>
            <button disabled={page === 1} onClick={prev}> &lt; </button>
            <button disabled={page===500||page === total_pages} onClick={next}>&gt;</button>
        </div>
    );
};

export default MoviesPagination;