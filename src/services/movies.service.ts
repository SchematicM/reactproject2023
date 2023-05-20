import {IRes} from "../types";
import {
    IMovies,
    IPagination,
    IUser,
    IMovieDetailsInterface,
    IVideosContent,
    IVideo,
    ISearchMoviesParams, IGenres,
} from "../interfaces";
import {axiosMoviesService} from "./axios.movie.service";
import {urls} from "../constants";

const moviesService = {
    getAll: (params: string): IRes<IPagination<IMovies>> =>
        axiosMoviesService.get(urls.movies.movies+params),
    getGenres:():IRes<IGenres> =>axiosMoviesService.get(urls.movies.genres),
    getDetails: (id: number): IRes<IMovieDetailsInterface> => axiosMoviesService.get(urls.movies.overview + id),
    getMe: (): IRes<IUser> => axiosMoviesService.get(urls.users.me),
    getMoviesByGenre: (query: ISearchMoviesParams): IRes<IPagination<IMovies>> =>
       query&& axiosMoviesService.get(`${urls.movies.getMoviesByGenre + query.query}&page=${query.page}`),
    getVideo: (id: number): IRes<IVideosContent<IVideo>> =>
        axiosMoviesService.get(urls.movies.overview + id + urls.movies.video),
    searchMovies: (query: ISearchMoviesParams): IRes<IPagination<IMovies>> =>
        axiosMoviesService.get(`${urls.movies.search + query.query}&page=${query.page}`),
    getRatedMovies:(query?:string) :IRes<IPagination<IMovies>> =>{
     return   query?axiosMoviesService.get(`${urls.movies.topRated}?${query}`):
            axiosMoviesService.get(urls.movies.topRated)
    }
}

export {moviesService}