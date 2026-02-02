import {axiosInstance} from "./api.service.ts";
import type {IComment} from "../models/IComment.ts";

export const loadAllComments = async (): Promise<IComment[]> => {
    const {data} = await axiosInstance.get<IComment[]>('/comments')
    return data;
}