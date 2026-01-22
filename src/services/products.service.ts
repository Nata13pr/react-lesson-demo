import type {IProduct} from "../models/IProduct.ts";
import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";

export const loadProducts = async (page: string): Promise<IResponseType<IProduct, 'products'>> => {
    const limit = 5;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<IProduct, 'products'>>('/products' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}