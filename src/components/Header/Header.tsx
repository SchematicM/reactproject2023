import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {basePosterURL} from "../../constants";
import {userActions} from "../../redux";

import './header.css'


const Header: FC = () => {
    const {user} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(userActions.getMe());
    }, [])
    return (
        <header>
            <h2>M O V I E S</h2>
            <div className="container">
                <img className="image" src={basePosterURL + user.avatar.tmdb.avatar_path} alt={user.name}/>
            </div>


</header>

)
    ;
}
export default Header;