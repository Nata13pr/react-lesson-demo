import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
// import {postSliceAction} from "../redux/slices/postSlice/postSlice.ts";

export const PostsPage = () => {
    const {posts, loadState} = useAppSelector(({postSlice}) => postSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceAction.loadPosts())
    }, [])

    return (
        <div>
            heelo
            {/*{!loadState && <div>Loading</div>}*/}
            {/*{*/}
            {/*    posts.map((post) => {*/}
            {/*        return <div key={post.id}><strong>{post.title}</strong></div>*/}
            {/*    })*/}
            {/*}*/}
        </div>
    )
}