import UsersComponent from "../components/users-component/UsersComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../models/user-model/IUser.ts";
import {loadUsers} from "../services/api.service.ts";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        loadUsers()
            .then(response => setUsers(response))
    }, [])
    return (
        <UsersComponent users={users}/>
    )
}

export default UsersPage;