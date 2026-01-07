import "./UsersComponent.css"
import type {IUser} from "../../models/user-model/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import type {FC} from "react";

type UsersPropsType = {
    users: IUser[]
}
const UsersComponent: FC<UsersPropsType> = ({users}) => {
    return (
        <ul>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </ul>
    )
}
export default UsersComponent