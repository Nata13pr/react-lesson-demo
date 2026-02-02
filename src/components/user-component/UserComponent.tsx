import './UserComponent.css'
import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";

type UserPropsType = {
    user: IUser
}

const UserComponent: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/users/" + user.id);
    }
    return (
        <li onClick={handleOnClick}>
            {user.name}
        </li>
    )
}
export default UserComponent;