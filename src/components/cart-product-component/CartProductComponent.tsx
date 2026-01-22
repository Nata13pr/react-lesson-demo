import "./CartProductComponent.css"
import type {ICartProduct} from "../../models/cart-model/ICartProduct.ts";
import type {FC} from "react";

type CartProductPropsType = {
    product: ICartProduct
}
const CartProductComponent: FC<CartProductPropsType> = ({product}) => {
    return (

        <div className="product-item">
            <img src={product.thumbnail} alt={product.title} className="product-image"/>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-meta">
                    Ціна: {product.price}$ | Кількість: {product.quantity}
                </div>
            </div>
            <div className="product-price-block">
                <div className="old-price">{product.total}$</div>
                <div className="current-price">{product.discountedTotal}$</div>
                <div className="discount-tag">-{product.discountPercentage}%</div>
            </div>
        </div>
    )
}
export default CartProductComponent;