import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


import {useAppDispatch, useAppSelector} from "../../hooks";
import {basePosterURL} from "../../constants";
import {moviesActions, userActions} from "../../redux";

import './header.css'
import FunctionalHeader from "../FunctionalHeader/FunctionalHeader";

const Header: FC = () => {
    const {user} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    };

    useEffect(() => {
        dispatch(userActions.getMe());
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.getElementById("root")?.classList.add('dark');
        } else {
            document.getElementById("root")?.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className={"main-header"}>
            <div className={'left-header'}>
                <h2 onClick={() => {
                    dispatch(moviesActions.clearGenresForMovies());
                    navigate(`/movies?page=1`);
                }}>M O V I E S</h2>
                <input onChange={toggleDarkMode} type="checkbox" id="darkmode-toggle" checked={darkMode}/>
                <label htmlFor="darkmode-toggle"/>
            </div>
            <div className={'right-header'}>
                <div className={'search'}>
                    <FunctionalHeader/>
                </div>
                <div className={'avatar-img'} onClick={() => {
                    navigate(`/user-details`);
                }}>
                    <img className={"image"} src={basePosterURL + user.avatar.tmdb.avatar_path} alt={user.name}/>
                </div>
            </div>
        </header>
    );
};


export default Header;