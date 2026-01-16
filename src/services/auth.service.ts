import type ILogin from "../models/ILogin.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {axiosInstance} from "./api.service.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

export const login = async ({username, password, expiresInMins = 1}: ILogin): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('login', {
        username,
        password,
        expiresInMins
    })
    localStorage.setItem("user", JSON.stringify(userWithTokens))
    return userWithTokens
}

export const refresh = async () => {
    const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user')
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem("user", JSON.stringify(iUserWithTokens));
}