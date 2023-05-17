import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {axiosMoviesService} from "./axios.movie.service";
import {urls} from "../constants";
import {axiosPostersService} from "./axios.posters.service";

const moviesService = {
    getAll: (): IRes<IPagination<IMovie>> => axiosMoviesService.get(urls.movies.movies),
    getPoster: (filePath: string):IRes<string> => axiosPostersService.get(filePath)
}

export {moviesService}