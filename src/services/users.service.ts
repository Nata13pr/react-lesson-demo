import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";
import type {IUser} from "../models/user-model/IUser.ts";

export const loadUsers = async (page: string): Promise<IResponseType<IUser, 'users'>> => {
    const limit = 5;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<IUser, 'users'>>('/users' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}