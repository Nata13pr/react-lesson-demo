import {urls} from "../constants/urls.ts";
import type {ICart} from "../models/cart-model/ICart.ts";

export const cartService = {
    getAllCartsOUserById: async (id: number): Promise<ICart[]> => {
        const response = await fetch(urls.carts.userCartsById(id))
            .then(response => response.json())
        return response.carts;
    }
}