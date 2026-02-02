import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";
import PostsComponent from "../components/posts-component/PostsComponent.tsx";

export const PostsPage = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (posts.length === 0) dispatch(postSliceActions.loadPosts());
    }, []);
    return (
        <div>
            <PostsComponent posts={posts}/>
            <Outlet/>
        </div>
    )
}

