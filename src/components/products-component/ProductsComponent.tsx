import "./ProductsComponent.css"
import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
import ProductComponent from "../product-component/ProductComponent.tsx";

type ProductsPropsType = {
    products: IProduct[]
}
const ProductsComponent: FC<ProductsPropsType> = ({products}) => {
    return (
        <ul className='products'>
            {
                products.map(product => <ProductComponent product={product} key={product.id}/>)
            }
        </ul>
    )
}
export default ProductsComponent