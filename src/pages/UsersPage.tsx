import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";

export const UsersPage = () => {
    const {users, loadState} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {!loadState && <div>Loading</div>}

            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    )
}

