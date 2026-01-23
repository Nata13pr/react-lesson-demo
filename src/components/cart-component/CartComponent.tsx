import "./CartComponent.css"
import type {FC} from "react";
import type {ICart} from "../../models/cart-model/ICart.ts";
import CartProductComponent from "../cart-product-component/CartProductComponent.tsx";

type CartPropsType = {
    cart: ICart
}
const CartComponent: FC<CartPropsType> = ({cart}) => {
    return (
        <li className='list-cart'>
            <div className="cart-header">
                <div>
                    <h1>Кошик юзера №{cart.userId}</h1>
                    <p>У списку ${cart.totalProducts} найменування</p>
                </div>
                <div className="quantity-badge">
                    <div className="quantity-label">Всього товарів</div>
                    <div className="quantity-value">${cart.totalQuantity}</div>
                </div>
            </div>
            <div className="product-list">
                {
                    cart.products.map(product => <CartProductComponent product={product} key={product.id}/>)
                }
            </div>
            <div className="cart-footer">
                <div>
                    <div className="total-label">Сума до сплати</div>
                    <div className="total-price-group">
                        <span className="total-amount">{cart.discountedTotal}$</span>
                        <span className="total-old-amount">{cart.total}$</span>
                    </div>
                </div>
                <button className="checkout-btn">Оформити замовлення</button>
            </div>
        </li>
    )
}
export default CartComponent
