import {useEffect, useState} from "react";
import type {IUserDummyjson} from "../models/dummyjson-user-model/IUserDummyjson.ts";
import {loadDummysonUsers} from "../services/api.dummyjson.service.ts";
import UsersDummyjsonComponent from "../components/dummyjson/users-dummyjson-component/UsersDummyjsonComponent.tsx";

const UsersDummyjsonPage = () => {
    const [users, setUsers] = useState<IUserDummyjson[]>([]);

    useEffect(() => {
        loadDummysonUsers()
            .then(response => setUsers(response))
    }, [])

    return (
        <UsersDummyjsonComponent users={users}/>
    )
}
export default UsersDummyjsonPage;