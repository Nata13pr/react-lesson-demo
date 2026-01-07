import {useParams} from 'react-router-dom'
import CartsComponent from "../components/carts-component/CartsComponent.tsx";

const ProductsPage = () => {
    const {userId} = useParams();

    return (
        <div>
            {userId && <CartsComponent userId={userId}/>}
        </div>

    )
}
export default ProductsPage;