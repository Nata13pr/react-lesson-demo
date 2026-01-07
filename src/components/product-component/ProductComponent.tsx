import "./ProductComponent.css"
import type {ICartProduct} from "../../models/cart-model/ICartProduct.ts";
import type {FC} from "react";

type ProductPropsType = {
    product: ICartProduct
}
const ProductComponent: FC<ProductPropsType> = ({product}) => {
    return (
        <li>
            <section>
                <header>
                    <h1>{product.title}</h1>
                    <p>Артикул: <strong>{product.id}</strong></p>
                </header>
                <div>
                    <h2>Інформація про замовлення</h2>
                    <dl>
                        <dt>Ціна за одиницю:</dt>
                        <dd>{product.price} грн</dd>

                        <dt>Кількість:</dt>
                        <dd>{product.quantity} шт.</dd>

                        <dt>Загальна вартість:</dt>
                        <dd><strong>{product.total} грн</strong></dd>
                    </dl>
                </div>
                <footer>
                    <button type="button">Редагувати замовлення</button>
                    <button type="button">Видалити</button>
                </footer>
            </section>

            <hr/>

            <section>
                <h2>Список вибраних позицій</h2>
                <ul>
                    <li>
                        <article>
                            <h3>{product.title}</h3>
                            <p>ID: {product.id}</p>
                            <p>Кількість: {product.quantity}</p>
                            <p>Сума: {product.total}</p>
                        </article>
                    </li>
                </ul>
            </section>
        </li>
    )
}
export default ProductComponent