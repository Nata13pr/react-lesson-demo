import type {IUserDummyjson} from "../../../models/dummyjson-user-model/IUserDummyjson.ts";
import type {FC} from "react";
import UserDummyjsonComponent from "../user-dummyjson-component/UserDummyjsonComponent.tsx";

type UsersPropsType={
    users:IUserDummyjson[]
}

const UsersDummyjsonComponent:FC<UsersPropsType> =({users})=> {
    return(
        <ul>
            {
                users.map(user=>  <UserDummyjsonComponent key={user.id} user={user}/>)
            }
        </ul>
    )
}
export default UsersDummyjsonComponent;