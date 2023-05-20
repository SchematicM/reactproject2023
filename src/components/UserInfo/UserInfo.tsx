import React, {useEffect} from 'react';

import { userActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {basePosterURL} from "../../constants";

import './userInfo.css'

const UserInfo = () => {
    const{user} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.getMe());
    }, [])
    return (
        <div className={'user'}>
            <div className={'user-avatar'}>
                <img src={basePosterURL+user.avatar.tmdb.avatar_path} alt = {`${user.name} avatar`}/>
            </div>
            <div className={'user-info'}>
                <h1>Your Profile:</h1>

                <h2>{user.name}</h2>
                <h2>Username : {user.username}</h2>
                <h3>User ID : {user.id}</h3>
                <h3>Country code: {user.iso_3166_1}</h3>
            </div>

        </div>
    );
};

export default UserInfo;