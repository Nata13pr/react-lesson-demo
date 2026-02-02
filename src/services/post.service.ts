import {axiosInstance} from "./api.service.ts";
import type {IPost} from "../models/IPost.ts";

export const loadAllPosts = async (): Promise<IPost[]> => {
    const {data} = await axiosInstance.get<IPost[]>('/posts');
    return data;
}