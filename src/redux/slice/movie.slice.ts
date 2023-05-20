import {
    IGenre, IGenres,
    IMovieDetailsInterface,
    IMovies,
    IPagination,
    ISearchMoviesParams,
    IVideo,
    IVideosContent
} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    results: IMovies[],
    page: number,
    total_pages: number,
    details: IMovieDetailsInterface,
    videos: IVideosContent<IVideo>,
    genres:IGenre[],
    chosenGenres:number[],
    isSorted: boolean
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
    genres: [],
    chosenGenres:[],
    isSorted: false,
}

const getAll = createAsyncThunk<IPagination<IMovies>, string>(
    'movieSlice/getAll',
    async (page, { rejectWithValue }) => {
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
    async (id, { rejectWithValue }) => {
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
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getVideo(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);
const searchMovies = createAsyncThunk<IPagination<IMovies>, ISearchMoviesParams>(
    'movieSlice/searchMovies',
    async (query, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.searchMovies(query);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);

const getMoviesByGenre = createAsyncThunk<IPagination<IMovies>, ISearchMoviesParams>(
    'movieSlice/getMoviesByGenre',
    async (query, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getMoviesByGenre(query);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);
const getGenres = createAsyncThunk<IGenres, void>(
    'movieSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenres();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data ?? 'Unknown error occurred');
        }
    }
);
const getRatedMovies = createAsyncThunk<IPagination<IMovies>, string>(
    'movieSlice/getRatedMovies',
    async (query, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getRatedMovies(query);
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
    reducers: {
        setGenresForMovies: (state, action) => {
            const index = state.chosenGenres.indexOf(action.payload);
            if (index === -1) {
                state.chosenGenres.push(action.payload);
            } else {
                state.chosenGenres.splice(index, 1);
            }
        },
        clearGenresForMovies: (state) => {
            state.chosenGenres =[];
        },
        getChosenGenresFromQuery: (state, action) => {
            state.chosenGenres = action.payload.split(',').map(Number);
        },
        isSorted: (state, ) => {
            state.isSorted = !state.isSorted;
        }
    },
    extraReducers: builder => {
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
            .addCase(searchMovies.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.results = results;
                state.page = page;
                state.total_pages = total_pages;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.results = results;
                state.page = page;
                state.total_pages = total_pages;
            })
            .addCase(getRatedMovies.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.results = results;
                state.page = page;
                state.total_pages = total_pages;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.videos = action.payload
            })
    }
});

const {actions, reducer: moviesReducer} = slice;
const moviesActions = {
    ...actions,
    getAll, getDetails, getVideos, searchMovies,getMoviesByGenre, getGenres,getRatedMovies
};

export {moviesReducer, moviesActions};
