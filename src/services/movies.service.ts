import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosMoviesService} from "./axios.movie.service";
import {urls} from "../constants";

const moviesService = {
    getAll: (page:number = 1): IRes<IPagination<IMovie>> => axiosMoviesService.get(urls.movies.movies,{params:{page}}),
}

export {moviesService}