import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {type FC, } from "react";
import PostsCommentsComponent from "../components/posts-component-with-comments/PostsCommentsComponent.tsx";

type PostPropsType = {
    id: string,
}

export const PostPage: FC<PostPropsType> = ({id}) => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);

    return (
        <div>
            {id && <PostsCommentsComponent id={id} posts={posts} comments={comments}/>}
        </div>
    )
}