import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";
import type {IComment} from "../models/comment-model/IComment.ts";

export const loadComments = async (page: string): Promise<IResponseType<IComment, 'comments'>> => {
    const limit = 15;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<IComment, 'comments'>>('/comments' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}
export const getCommentsOfUser = async (postId: string): Promise<IResponseType<IComment, 'comments'>> => {
    const {data} = await axiosInstance.get<IResponseType<IComment, 'comments'>>(`comments/post/${postId}`);
    return data;
}