import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {moviesActions} from "../../redux";

const MovieCardOverview = () => {
    const{details} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        // @ts-ignore
        dispatch( moviesActions.getDetails(id));
    }, [id])
    return (
        <div>
            Overview page
            {JSON.stringify(details)}

        </div>
    );
};

export default MovieCardOverview;