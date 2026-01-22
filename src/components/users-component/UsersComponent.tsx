import "./UsersComponent.css"
import type {FC} from "react";
import type {IUser} from "../../models/user-model/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

type UsersPropsType = {
    users: IUser[]
}
const UsersComponent: FC<UsersPropsType> = ({users}) => {
    return (
        <ul className='users'>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </ul>
    )
}
export default UsersComponent