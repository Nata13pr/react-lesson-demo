import "./ProductComponent.css"
import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
import ImagesComponent from "../images-component/ImagesComponent.tsx";
import ReviewsComponent from "../reviews-component/ReviewsComponent.tsx";
import TagsComponent from "../tags-component/TagsComponent.tsx";

type ProductPropsType = {
    product: IProduct,
}
const ProductComponent: FC<ProductPropsType> = ({product}) => {
    console.log(product)
    return (
        <li>
            <h2><span>Brand</span>- {product.brand}.Category - {product.category}</h2>
            <h2><span>Title </span>- {product.title}</h2>
            <img className='thumbnail' src={product.thumbnail} alt={product.title}/>
            <p><span>Description</span> - {product.description}</p>
            <p><span>Dimensions:</span> width - {product.dimensions.width},height - {product.dimensions.height}.Depth
                - {product.dimensions.depth}</p>
            <ReviewsComponent reviews={product.reviews}/>
            <p><span>Discount percentage</span> - {product.discountPercentage}</p>
            <p><span>Minimum order quantity</span> - {product.minimumOrderQuantity}</p>
            <p><span>Price</span> - {product.price}</p>
            <p><span>Rating</span> - {product.rating}</p>
            <p><span>Return policy</span>- {product.returnPolicy}</p>
            <ImagesComponent images={product.images} title={product.title}/>
            <p><span>Shipping information</span> - {product.shippingInformation}</p>
            <p><span>Warranty Information</span> - {product.warrantyInformation}</p>
            <p><span>Weight</span> - {product.weight}</p>
            <TagsComponent tags={product.tags}/>
        </li>
    )
}
export default ProductComponent