import type {IProduct} from "../models/IProduct.ts";
import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";

export const loadProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IResponseType<IProduct, 'products'>>('/products');
    return products
}