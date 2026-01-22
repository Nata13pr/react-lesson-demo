import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";
import type {ICart} from "../models/cart-model/ICart.ts";

export const loadCarts = async (page: string): Promise<IResponseType<ICart, 'carts'>> => {
    const limit = 20;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<ICart, 'carts'>>('/carts' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}