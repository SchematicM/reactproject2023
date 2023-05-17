import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {moviesService} from "../../services";
import {AxiosError} from "axios";


interface IState {
user: IUser
}

const initialState: IState = {
    user: {
        avatar: {
            gravatar: {
                hash: "abcdef12345",
            },
            tmdb: {
                avatar_path: "/path/to/avatar.jpg",
            },
        },
        id: 1,
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "John Doe",
        include_adult: false,
        username: "johndoe",
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
