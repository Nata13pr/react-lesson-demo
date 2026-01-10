import './UserComponent.css';
import type {IUser} from "../../models/user-model/IUser.ts";
import type {FC} from "react";

type UsersPropsType = {
    user: IUser
}
const UserComponent: FC<UsersPropsType> = ({user}) => {
    return (
        <li>
            {user.firstName} {user.lastName} {user.id}
        </li>
    )
}
export default UserComponent;