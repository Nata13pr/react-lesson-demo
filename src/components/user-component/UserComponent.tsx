import './UserComponent.css';
import type {IUser} from "../../models/user-model/IUser.ts";
import type {FC} from "react";
import {useNavigate} from "react-router";

type UsersPropsType = {
    user: IUser
}
const UserComponent: FC<UsersPropsType> = ({user}) => {
    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/posts')
    }
    return (
        <li>
            {user.firstName} {user.lastName} {user.id}
            <button className='button' onClick={onButtonClickNavigate}>Posts</button>
        </li>
    )
}
export default UserComponent;