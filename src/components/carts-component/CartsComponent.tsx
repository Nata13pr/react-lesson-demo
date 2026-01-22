import "./CartsComponent.css"
import type {FC} from "react";
import type {ICart} from "../../models/cart-model/ICart.ts";
import CartComponent from "../cart-component/CartComponent.tsx";

type CartsPropsType = {
    carts: ICart[]
}
const CartsComponent: FC<CartsPropsType> = ({carts}) => {
    return (
        <ul className='carts'>
            {
                carts.map(cart => <CartComponent cart={cart} key={cart.id}/>)
            }
        </ul>
    )
}
export default CartsComponent