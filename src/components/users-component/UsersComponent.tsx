import "./UsersComponent.css"
import type {IUser} from "../../models/user-model/IUser.ts";
import type {FC} from "react";
import UserComponent from "../user-component/UserComponent.tsx";

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