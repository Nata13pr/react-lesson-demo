import {useEffect, useState} from "react";
import type {IProduct} from "../models/IProduct.ts";
import {loadProducts} from "../services/products.service.ts";
import {refresh} from "../services/auth.service.ts";
import ProductsComponent from "../components/products-component/ProductsComponent.tsx";
import {useSearchParams} from "react-router";
import PaginationPage from "./PaginationPage.tsx";

const ProductsPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [products, setProducts] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadProducts(currentPage)
            .then(({products,total}) => {
                setProducts(products)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadProducts(currentPage))
                    .then(({products, total}) => {
                        setProducts(products)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <ProductsComponent products={products}/>
            <PaginationPage total={total} limit={5}/>
        </>
    )
}
export default ProductsPage