import type {IUser} from "../models/user-model/IUser.ts";
import {useEffect, useState} from "react";
import {userService} from "../services/api.service.ts";
import UsersComponent from "../components/users-component/UsersComponent.tsx";
import {Outlet, useSearchParams} from "react-router";
import PaginationPage from "./PaginationPage.tsx";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState(0);
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const skip: number = Number(query.get('skip'))
        if (isNaN(skip)) {
            userService.getAllUsers('0')
                .then(response => {
                    setUsers(response.users)
                    setTotal(response.total)
                    setQuery({limit: '5', skip: '0'})
                })
        } else {
            userService.getAllUsers(skip.toString())
                .then(response => {
                    setUsers(response.users)
                    setTotal(response.total)
                })
        }

    }, [query])
    return (
        <>
            <Outlet/>
            <hr className='text-red-950 border-7'/>
            <UsersComponent users={users}/>
            <PaginationPage total={total}/>
        </>
    )
}
export default UsersPage;
