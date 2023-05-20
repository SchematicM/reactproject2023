import React, {FC, useEffect, useState} from 'react';

import './filters.css'
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";


const Filters:FC = () => {
    const {genres} = useAppSelector(state=>state.moviesReducer);
    const dispatch = useAppDispatch();
useEffect(()=>{
    dispatch(moviesActions.getGenres())
},[])
    return (
        <div className={'filters'}>
            {
                // JSON.stringify(genres);
                // genres.map(genre => (<GenreBadge key = {genre.id} id={genre.id} name={genre.name}/>))
            }
        </div>
    );
};

export default Filters;