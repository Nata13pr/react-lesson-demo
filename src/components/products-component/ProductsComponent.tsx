import './ProductsComponent.css'
import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {loadProducts} from "../../service/api.service.ts";
import ProductComponent from "../product-component/ProductComponent.tsx";

const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        loadProducts()
            .then(response => setProducts(response))
    }, [])
    return (
        <ul>
            {products.map((product) => <ProductComponent product={product} key={product.id}/>)}
        </ul>
    )
}
export default ProductsComponent