import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import {loadCarts} from "../services/carts.service.ts";
import type {ICart} from "../models/cart-model/ICart.ts";
import CartsComponent from "../components/carts-component/CartsComponent.tsx";

const CartsPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [carts, setCarts] = useState<ICart[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadCarts(currentPage)
            .then(({carts, total}) => {
                setCarts(carts)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadCarts(currentPage))
                    .then(({carts, total}) => {
                        setCarts(carts)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <CartsComponent carts={carts}/>
            {total > 20 && <PaginationPage total={total} limit={20}/>}
        </>
    )
}
export default CartsPage;