import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {Outlet} from "react-router-dom";

export const UserPage = () => {
    const {id} = useParams();

    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(userSliceActions.loadUser(id));
    }, [id]);
    return (
        <div>
            {!loadState && <div>Loading</div>}
            {user && <div>{user.id} {user.name}</div>}
            <Outlet/>
        </div>
    )
}