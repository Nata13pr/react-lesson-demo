import "./UserComponent.css"
import type {IUser} from "../../models/user-model/IUser.ts";
import type {FC} from "react";
import {Link} from 'react-router'
import {useNavigate} from 'react-router-dom'

type UserPropsType = {
    user: IUser
}
const UserComponent: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('products', {state: user})
    }
    return (
        <li>
            <h2>{user.firstName} - {user.lastName}</h2>
            <Link to={'products'} state={user}>Products</Link>
            <button onClick={handleOnClick}>go to basket</button>
        </li>
    )
}
export default UserComponent