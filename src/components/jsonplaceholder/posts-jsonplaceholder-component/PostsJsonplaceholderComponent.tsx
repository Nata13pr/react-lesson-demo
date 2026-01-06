import './PostsJsonplaceholderComponent.css'
import type {IPostJsonplaceholder} from "../../../models/IPostJsonplaceholder.ts";
import type {FC} from "react";
import PostJsonplaceholderComponent from "../post-jsonplaceholder-component/PostJsonplaceholderComponent.tsx";

type PostsPropsType = {
    posts: IPostJsonplaceholder[]
}

const PostsJsonplaceholderComponent: FC<PostsPropsType> = ({posts}) => {
    return (
        <ul>
            {posts.map(post => <PostJsonplaceholderComponent key={post.id} post={post}/>)}
        </ul>
    )
}
export default PostsJsonplaceholderComponent