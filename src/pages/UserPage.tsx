import {useParams} from "react-router";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {PostPage} from "./PostPage.tsx";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";
import {commentSliceActions} from "../redux/slices/commentSlice/commentSlice.ts";

export const UserPage = () => {
    const {id} = useParams();
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const {comments} = useAppSelector(({commentSlice}) => commentSlice)
    const {user} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(userSliceActions.loadUser(id));
        if (posts.length === 0) dispatch(postSliceActions.loadPosts());
        if (comments.length === 0) dispatch(commentSliceActions.loadComments());
    }, [id]);
    return (
        <div>
            {user && <div>{user.id} {user.name}</div>}
            {id && <PostPage id={id}/>}
        </div>
    )
}