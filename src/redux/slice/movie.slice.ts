import {IMovie, IPagination} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    results: IMovie[],
    page: number,
    poster: string
}

const initialState: IState = {
    results: [],
    page: 0,
    poster:''
}

const getAll = createAsyncThunk<IPagination<IMovie>, void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);
const getPoster = createAsyncThunk<string, string>(
    'movieSlice/getPoster',
    async (filePath: string, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getPoster(filePath);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);
const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(getAll.fulfilled, (state, action) => {
            const {results, page} = action.payload;
            state.results = results;
            state.page = page;
        })
            .addCase(getPoster.fulfilled, (state, action) => {
            state.poster = action.payload;
        })
});

const {actions, reducer: moviesReducer} = slice;
const moviesActions = {
    ...actions,
    getAll,getPoster
};

export {moviesReducer, moviesActions};
