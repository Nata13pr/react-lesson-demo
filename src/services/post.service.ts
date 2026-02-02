import {axiosInstance} from "./api.service.ts";
import type {IPost} from "../models/IPost.ts";

export const loadAllPosts = async (postId: string): Promise<IPost[]> => {
    const {data} = await axiosInstance.get<IPost[]>('/users/' + postId + '/posts');
    return data;
}