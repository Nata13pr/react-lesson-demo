import './UsersJsonplaceholderComponent.css'
import type {IUserJsoplaceholder} from "../../../models/jsonplaceholder-user-model/IUserJsoplaceholder.ts";
import type {FC} from "react";
import UserJsonplaceholderComponent from "../user-jsonplaceholder-component/UserJsonplaceholderComponent.tsx";

type UsersPropsType = {
    users: IUserJsoplaceholder[]
}
const UsersJsonplaceholderComponent: FC<UsersPropsType> = ({users}) => {
    return (
        <ul>
            {
                users.map(user => <UserJsonplaceholderComponent key={user.id} user={user}/>)
            }
        </ul>
    )
}
export default UsersJsonplaceholderComponent