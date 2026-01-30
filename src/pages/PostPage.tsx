import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";

export const PostPage = () => {
    const {id} = useParams();

    const {post, loadState} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id)dispatch(userSliceActions.loadUser(id))
    }, [id]);

    return(
        <div>
            {!loadState && <div>Loading</div>}
            {post && <div>{post.id} {post.title}</div>}
        </div>
    )
}