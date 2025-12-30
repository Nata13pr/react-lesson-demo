import type {IProductList} from "../models/IProductList.ts";
import type {IProduct} from "../models/IProduct.ts";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

const loadProducts = async (): Promise<IProduct[]> => {
    const response: IProductList = await fetch(endpointProducts)
        .then(res => res.json());
    return response.products
}

export {
    loadProducts,
}