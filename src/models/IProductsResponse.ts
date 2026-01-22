import type {IProduct} from "./IProduct.ts";
import type {IBaseResponse} from "./IBaseResponse.ts";

export interface IProductsResponse extends IBaseResponse {
    products: IProduct[];
}