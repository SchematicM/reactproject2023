import { baseMovieURL, token } from "../constants";
import axios from "axios";

const axiosMoviesService = axios.create({ baseURL: baseMovieURL });

axiosMoviesService.interceptors.request.use(req => {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export { axiosMoviesService }