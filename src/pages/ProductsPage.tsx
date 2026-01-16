import {useEffect, useState} from "react";
import type {IProduct} from "../models/IProduct.ts";
import {loadProducts} from "../services/product.service.ts";
import {refresh} from "../services/auth.service.ts";

const ProductsPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        loadProducts()
            .then(products => setProducts(products))
            .catch(() => {
                refresh()
                    .then(() => loadProducts())
                    .then(value => setProducts(value))
            });
    }, [])
    console.log(products, 'products')
    return (
        <>
            Products
        </>
    )
}
export default ProductsPage