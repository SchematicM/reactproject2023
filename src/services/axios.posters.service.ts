import axios from "axios";
import {basePosterURL, token} from "../constants";

const axiosPostersService = axios.create({ baseURL: basePosterURL });

axiosPostersService.interceptors.request.use(req => {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
});
export {axiosPostersService}
