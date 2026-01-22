import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";
import type {ITodo} from "../models/ITodo.ts";

export const loadTodos = async (page: string): Promise<IResponseType<ITodo, 'todos'>> => {
    const limit = 30;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<ITodo, 'todos'>>('/todos' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}