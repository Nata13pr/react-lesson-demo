import {useOutletContext, useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import {getCartsOfUser, loadCarts} from "../services/carts.service.ts";
import type {ICart} from "../models/cart-model/ICart.ts";
import CartsComponent from "../components/carts-component/CartsComponent.tsx";

const CartsPage = () => {
    const context = useOutletContext<{ userId: string } | null>();
    const userId = context?.userId;
    const [searchParams] = useSearchParams({page: '1'});
    const [carts, setCarts] = useState<ICart[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        if (userId) {
            getCartsOfUser(userId)
                .then(({carts}) => {
                    setCarts(carts);
                })
                .catch(() => {
                    refresh()
                        .then(() => getCartsOfUser(userId))
                        .then(({carts}) => {
                            setCarts(carts)
                        })
                });
        } else {
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
        }
    }, [userId, searchParams]);

    return (
        <>
            {userId && carts.length === 0 && (
                <div style={{fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>
                    User №{userId} doesn't have any carts yet.
                </div>
            )}
            {carts.length > 0 && <CartsComponent carts={carts}/>}
            {!userId && total > 20 && <PaginationPage total={total} limit={20}/>}
        </>
    )
}
export default CartsPage;