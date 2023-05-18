import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {moviesActions} from "../../redux";
import {basePosterURL} from "../../constants";
import Genres from "../Genres/Genres";
import StarsRating from "../StarsRating/StarsRating";
import ProductionCompanies from "../ProductionCompanies/ProductionCompanies";
import SpokenLanguages from "../SpokenLanguages/SpokenLanguages";

import './movieCardOverview.css';

const MovieCardOverview = () => {
    const {details, videos} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(moviesActions.getDetails(+id));
            dispatch(moviesActions.getVideos(+id));
        }
    }, [])

    return (
        <div className={'movie-details'}>
            {/*<VideoContent videoKey={videos.results[1].key}/>*/}
            <div className={'movie-details-poster'}>
                <img src={basePosterURL + details.poster_path} alt={details.title + ' poster'}/>
            </div>
            <div className={'movie-details-info'}>
                <h1>
                    {
                        details.title === details.original_title ? details.title : `${details.original_title}(${details.title})`
                    }
                </h1>
                <p>Release Date: {details.release_date}</p>

                <Genres genres={details.genres}/>
                <h3>Rating</h3>
                <p>Votes count: {details.vote_count}</p>
                <StarsRating rating={details.vote_average}/>
                <SpokenLanguages languages={details.spoken_languages}/>
                <h3>Overview</h3>
                <p>{details.overview}</p>

                {details.belongs_to_collection &&
                    <div className={'collection-belonging'}>
                        <h3>Collection: {details.belongs_to_collection.name}</h3>
                        <div className={'collection-poster'}>
                            <img src={basePosterURL + details.belongs_to_collection.poster_path}
                                 alt={details.belongs_to_collection.name + ' poster'}/>
                        </div>
                    </div>
                }
                <ProductionCompanies companies={details.production_companies}/>
            </div>

        </div>
    );
};

export default MovieCardOverview;