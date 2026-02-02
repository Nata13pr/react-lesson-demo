import type {IUser} from "../models/IUser.ts";
import {axiosInstance} from "./api.service.ts";

export const loadAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users')
    return data;
}