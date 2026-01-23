import {axiosInstance} from "./api.service.ts";
import type {IUser} from "../models/user-model/IUser.ts";

export const loadMyProfile = async (): Promise<IUser> => {
    const {data} = await axiosInstance.get<IUser>('/me');
    return data;
}