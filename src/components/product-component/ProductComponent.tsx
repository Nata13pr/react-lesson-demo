import "./ProductComponent.css"
import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";

type ProductPropsType = {
    product: IProduct,
}
const ProductComponent: FC<ProductPropsType> = ({product}) => {
    console.log(product)
    return (
        <li>
        </li>
    )
}
export default ProductComponent