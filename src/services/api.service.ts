import axios from 'axios';
import {baseUrl} from "../constants/urls.ts";
import type ILogin from "../models/ILogin.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
// import type {IResponseType} from "../models/IResponseType.ts";
// import type {IProduct} from "../models/IProduct.ts";
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
export const login = async ({username, password, expiresInMins = 1}: ILogin): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('login', {
        username,
        password,
        expiresInMins
    })
    localStorage.setItem("user", JSON.stringify(userWithTokens))
    return userWithTokens
}
