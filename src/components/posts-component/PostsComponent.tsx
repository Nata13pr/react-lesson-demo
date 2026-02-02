import './PostsComponent.css'
import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";

type PostsPropsType = {
    posts: IPost[],
}
const PostsComponent: FC<PostsPropsType> = ({posts}) => {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {
                    posts.map(post => <PostComponent post={post} key={post.id}/>)
                }
            </ul>
        </div>
    )
}
export default PostsComponent;