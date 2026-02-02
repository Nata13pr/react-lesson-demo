import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import UsersComponent from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    const {users, loadState} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {!loadState && <div>Loading</div>}
            <UsersComponent users={users}/>
            <Outlet/>
        </div>
    )
}

