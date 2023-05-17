import {IRes} from "../types";
import {IMovies, IPagination, IUser, IMovieDetailsInterface} from "../interfaces";
import {axiosMoviesService} from "./axios.movie.service";
import {urls} from "../constants";

const moviesService = {
    getAll: (page:number = 1): IRes<IPagination<IMovies>> => axiosMoviesService.get(urls.movies.movies,{params:{page}}),
    getMe: (): IRes<IUser> => axiosMoviesService.get(urls.users.me),
    getDetails:(id:number):IRes<IMovieDetailsInterface> => axiosMoviesService.get(urls.movies.overview+id)
}

export {moviesService}