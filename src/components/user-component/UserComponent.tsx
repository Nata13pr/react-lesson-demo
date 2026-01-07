import "./UserComponent.css"
import type {IUser} from "../../models/user-model/IUser.ts";
import type {FC} from "react";
import {useNavigate} from 'react-router-dom'

type UserPropsType = {
    user: IUser
}
const UserComponent: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/carts/user/' + user.id, {state: user})
    }
    return (
        <li>
            <h2 onClick={handleOnClick}>{user.firstName} - {user.lastName}</h2>
        </li>
    )
}
export default UserComponent