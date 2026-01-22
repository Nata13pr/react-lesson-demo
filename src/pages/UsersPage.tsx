import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import UsersComponent from "../components/users-component/UsersComponent.tsx";
import type {IUser} from "../models/user-model/IUser.ts";
import {loadUsers} from "../services/users.service.ts";

const UsersPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadUsers(currentPage)
            .then(({users, total}) => {
                setUsers(users)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadUsers(currentPage))
                    .then(({users, total}) => {
                        setUsers(users)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <UsersComponent users={users}/>
            {total > 5 && <PaginationPage total={total} limit={5}/>}
        </>
    )
}
export default UsersPage;