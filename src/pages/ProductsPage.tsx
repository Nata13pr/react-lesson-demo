import {useLocation} from 'react-router-dom'
import type {IUser} from "../models/user-model/IUser.ts";

const ProductsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;

    return (
        <>
            {user.firstName}
        </>
    )
}
export default ProductsPage;