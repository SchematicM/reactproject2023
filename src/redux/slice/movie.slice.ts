import {IMovieDetailsInterface, IMovies, IPagination, IVideo, IVideosContent} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {AxiosError} from "axios";
import {RootState} from "../store";

interface IState {
    results: IMovies[],
    page: number,
    total_pages: number,
    details: IMovieDetailsInterface
    videos: IVideosContent<IVideo>
    isLoading: boolean;
}

const initialState: IState = {
    results: [],
    page: 1,
    total_pages: 0,
    details: {
        "adult": false,
        "backdrop_path": '',
        "belongs_to_collection": {
            "id": 0,
            "name": '',
            "poster_path": "",
            "backdrop_path": ''
        },
        "budget": 0,
        "genres": [],
        "homepage": '',
        "id": 0,
        "imdb_id": '',
        "original_language": '',
        "original_title": '',
        "overview": '',
        "popularity": 0,
        "poster_path":null,
        "production_companies": [],
        "release_date": '',
        "revenue": 0,
        "runtime": 0,
        "spoken_languages": [],
        "status": '',
        "tagline": '',
        "title": '',
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    videos: {
        id: 0,
        results: []
    },
    isLoading: false
}

const getAll = createAsyncThunk<IPagination<IMovies>, number>(
    'movieSlice/getAll',
    async (page, { rejectWithValue, getState }) => {
        const { isLoading } = (getState() as RootState).moviesReducer;
        if (isLoading) {
            return rejectWithValue('Loading in progress');
        }

        try {
            const { data } = await moviesService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);

const getDetails = createAsyncThunk<IMovieDetailsInterface, number>(
    'movieSlice/getDetails',
    async (id, { rejectWithValue, getState }) => {
        const { isLoading } = (getState() as RootState).moviesReducer;
        if (isLoading) {
            return rejectWithValue('Loading in progress');
        }

        try {
            const { data } = await moviesService.getDetails(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);

const getVideos = createAsyncThunk<IVideosContent<IVideo>, number>(
    'movieSlice/getVideos',
    async (id, { rejectWithValue, getState }) => {
        const { isLoading } = (getState() as RootState).moviesReducer;
        if (isLoading) {
            return rejectWithValue('Loading in progress');
        }

        try {
            const { data } = await moviesService.getVideo(id);
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
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.results = results;
                state.page = page;
                state.total_pages = total_pages;
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.details = action.payload
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.videos = action.payload
            })


});

const {actions, reducer: moviesReducer} = slice;
const moviesActions = {
    ...actions,
    getAll, getDetails, getVideos
};

export {moviesReducer, moviesActions};
