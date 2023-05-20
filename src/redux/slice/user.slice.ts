import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUser} from "../../interfaces";
import {moviesService} from "../../services";


interface IState {
user: IUser
}

const initialState: IState = {
    user: {
        avatar: {
            gravatar: {
                hash: '',
            },
            tmdb: {
                avatar_path:"/g6Ms99t22AlLEfPeJ6ehsjLMTdf.jpg",
            },
        },
        id: 1,
        iso_639_1: '',
        iso_3166_1: '',
        name: '',
        include_adult: false,
        username: '',
    }
}

const getMe = createAsyncThunk<IUser, void>(
    'userSlice/getMe',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMe();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);
const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(getMe.fulfilled, (state, action) => {
          state.user = action.payload
        })

});
const {actions, reducer: userReducer} = slice;
const userActions = {
    ...actions,
    getMe
};

export {userReducer, userActions};
