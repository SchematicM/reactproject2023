import {IRes} from "../types";
import {IMovie, IPagination, IUser} from "../interfaces";
import {axiosMoviesService} from "./axios.movie.service";
import {urls} from "../constants";

const moviesService = {
    getAll: (page:number = 1): IRes<IPagination<IMovie>> => axiosMoviesService.get(urls.movies.movies,{params:{page}}),
    getMe: (): IRes<IUser> => axiosMoviesService.get(urls.users.me)
}

export {moviesService}