import "./CartsComponent.css"
import {type FC, useEffect, useState} from "react";
import type {ICart} from "../../models/cart-model/ICart.ts";
import {cartService} from "../../services/cartproducts.api.service.ts";
import CartComponent from "../cart-component/CartComponent.tsx";

type CartsPropsType = {
    userId: string
}
const CartsComponent: FC<CartsPropsType> = ({userId}) => {
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (userId) {
            cartService.getAllCartsOUserById(+userId)
                .then(response => setCarts(response))
        }
    }, [userId])
    return (
        <>
            {carts.length === 0 ?
                (<h2><strong>User with id {userId} doesn't have carts. </strong></h2>) :
                (<div>
                        <h2><strong>Carts.Carts quantity - {carts.length}</strong></h2>
                        <ul>
                            {carts.map((cart, index) => <CartComponent key={index} cart={cart}/>)}
                        </ul>
                    </div>
                )}
        </>

    )
}
export default CartsComponent