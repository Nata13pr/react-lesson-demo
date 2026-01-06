import type {IUserJsoplaceholder} from "../models/jsonplaceholder-user-model/IUserJsoplaceholder.ts";
import {useEffect, useState} from "react";
import {loadJsonplaceholderUsers} from "../services/api.jsonplaceholder.service.ts";
import UsersJsonplaceholderComponent
    from "../components/jsonplaceholder/users-jsonplaceholder-component/UsersJsonplaceholderComponent.tsx";

const UsersJsonplaceholderPage = () => {
    const [users, setUsers] = useState<IUserJsoplaceholder[]>([]);

    useEffect(() => {
        loadJsonplaceholderUsers()
            .then(response => setUsers(response));
    }, [])
    return (
        <UsersJsonplaceholderComponent users={users}/>
    )
}
export default UsersJsonplaceholderPage