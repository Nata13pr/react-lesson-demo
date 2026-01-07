import "./CartComponent.css"
import type {FC} from "react";
import type {ICart} from "../../models/cart-model/ICart.ts";
import ProductComponent from "../product-component/ProductComponent.tsx";

type CartsPropsType = {
    cart: ICart
}
const CartComponent: FC<CartsPropsType> = ({cart}) => {
    return (
        <div>
            <h3><strong>Products</strong></h3>
            <ul>
                {cart.products.map((product, index) => <ProductComponent key={index} product={product}/>)}
            </ul>
        </div>
    )
}
export default CartComponent