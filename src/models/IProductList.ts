import type {IProduct} from "./IProduct.ts";

export interface IProductList {
    products: IProduct[],
    total: number,
    skip: number,
    limit: number,
}