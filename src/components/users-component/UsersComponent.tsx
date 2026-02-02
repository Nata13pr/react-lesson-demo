import './UsersComponent.css'
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

type UsersPropsType = {
    users: IUser[]
}
const UsersComponent: FC<UsersPropsType> = ({users}) => {
    return (
        <ul>
            {
                users.map((user) => <UserComponent user={user} key={user.id}/>)
            }
        </ul>
    )
}
export default UsersComponent;