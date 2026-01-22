import axios from 'axios';
import {baseUrl} from "../constants/urls.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retrieveLocalStorage} from "./helpers.ts";

export const axiosInstance = axios.create({
    baseURL: baseUrl + '/auth',
    headers: {'Content-Type': 'application/json'},
})
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = "Bearer " + retrieveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;
})
