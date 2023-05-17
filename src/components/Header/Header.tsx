import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


import {useAppDispatch, useAppSelector} from "../../hooks";
import {basePosterURL} from "../../constants";
import {userActions} from "../../redux";

import './header.css'

const Header: FC = () => {
    const { user } = useAppSelector(state => state.userReducer);
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
            document.getElementById("root")?.classList.toggle('dark');

    }, [darkMode]);

    return (
        <header className={"main-header"}>
            <div className={'left-header'}>
                <h2 onClick={() => { navigate(`/movies`); }}>M O V I E S</h2>
                <input onChange={toggleDarkMode} type="checkbox" id="darkmode-toggle" checked={darkMode} />
                <label htmlFor="darkmode-toggle" />
            </div>
            <div className={'right-header'} onClick={() => { navigate(`/user-details`); }}>
                <img className={"image"} src={basePosterURL + user.avatar.tmdb.avatar_path} alt={user.name} />
            </div>
        </header>
    );
};

export default Header;