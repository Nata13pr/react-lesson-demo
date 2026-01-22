import "./ProductComponent.css"
import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
import TagComponent from "../tag-component/TagComponent.tsx";
import ReviewComponent from "../review-component/ReviewComponent.tsx";
import ImageComponent from "../image-component/ImageComponent.tsx";

type ProductPropsType = {
    product: IProduct
}
const ProductComponent: FC<ProductPropsType> = ({product}) => {
    return (
        <li>
            <div className="card">
                <div className="header">
                    <img src={product.thumbnail} alt={product.title} className="image"/>
                    <div style={{flex: 1}}>
                        <h1 style={{margin: '0 0 10px 0'}}>{product.title}</h1>
                        <p style={{color: '#666'}}>{product.brand} | {product.category}</p>
                        <div>
                            <span className="priceTag">${product.price}</span>
                            <span className="discount">-{product.discountPercentage}%</span>
                        </div>
                        <p>Рейтинг: ⭐ {product.rating}</p>
                        <p style={{lineHeight: '1.5'}}>{product.description}</p>
                    </div>
                </div>
                <div className="section">
                    <h3>Наявність та доставка</h3>
                    <p>Статус: <strong>{product.availabilityStatus}</strong> ({product.stock} шт. в наявності)</p>
                    <p>Доставка: {product.shippingInformation}</p>
                    <p>Гарантія: {product.warrantyInformation}</p>
                </div>
                <div className="section">
                    <h3>Характеристики</h3>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        <li><strong>Артикул (SKU):</strong> {product.sku}</li>
                        <li><strong>Вага:</strong> {product.weight}г</li>
                        <li>
                            <strong>Розміри:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} см
                        </li>
                    </ul>
                </div>
                <div style={{marginTop: '15px'}}>
                    {product.tags.map((tag, index) => <TagComponent key={index} tag={tag}/>)}
                </div>
                <div className="section">
                    <h3>Галерея</h3>
                    <div className="gallery">
                        {product.images.map((img, index) => <ImageComponent img={img} key={index}/>)}
                    </div>
                </div>
                <div className="section">
                    <h3>Відгуки ({product.reviews.length})</h3>
                    {product.reviews.map((review, index) => <ReviewComponent review={review} key={index}/>)}
                </div>
            </div>
        </li>
    )
}
export default ProductComponent