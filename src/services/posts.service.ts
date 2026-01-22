import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";
import type {IPost} from "../models/post-model/IPost.ts";

export const loadPosts = async (page: string): Promise<IResponseType<IPost, 'posts'>> => {
    const limit = 20;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<IPost, 'posts'>>('/posts' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}