import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {moviesActions} from "../../redux";
import {basePosterURL} from "../../constants";
import Genres from "../Genres/Genres";
import StarsRating from "../StarsRating/StarsRating";
import SpokenLanguages from "../SpokenLanguages/SpokenLanguages";

import './movieCardOverview.css';
import VideoContent from "../VideoContent/VideoContent";
import ProductionCompanies from "../ProductionCompanies/ProductionCompanies";

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

            <div className={'general'}>
                <div className={'movie-details-poster'}>
                    {details.poster_path &&
                        <img src={basePosterURL + details.poster_path} alt={details.title + ' poster'}/>}
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
                    {videos.results && <VideoContent videoKey={videos.results[1]?.key}/>}
                    <SpokenLanguages languages={details.spoken_languages}/>
                </div>
            </div>
            <div className={'additional'}>
                <h3>Overview</h3>
                <p>{details.overview}</p>
                <div className={'more'}>
                    {details.belongs_to_collection &&
                        <div className={'collection-belonging'}>
                            <div className={'collection-name'}>
                                <h3>Collection: {details.belongs_to_collection.name}</h3>
                            </div>
                            <div className={'collection-poster'}>
                                {details.belongs_to_collection.poster_path &&
                                    <img src={basePosterURL + details.belongs_to_collection.poster_path}
                                         alt={details.belongs_to_collection.name + ' poster'}/>}
                            </div>
                        </div>
                    }
                    <ProductionCompanies companies={details.production_companies}/>
                </div>
            </div>
        </div>
    );
};

export default MovieCardOverview;