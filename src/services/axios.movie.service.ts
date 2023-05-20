import axios from "axios";

import { baseMovieURL, token } from "../constants";

const axiosMoviesService = axios.create({ baseURL: baseMovieURL });

axiosMoviesService.interceptors.request.use(req => {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export { axiosMoviesService }