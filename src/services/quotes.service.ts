import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";
import type {IQuote} from "../models/IQuote.ts";

export const loadQuotes = async (page: string): Promise<IResponseType<IQuote, 'quotes'>> => {
    const limit = 20;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<IQuote, 'quotes'>>('/quotes' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}