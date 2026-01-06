import "./PostsDummyjsonComponent.css"
import type {IPostDummyjson} from "../../../models/IPostDummyjson.ts";
import type {FC} from "react";
import PostDummyjsonComponent from "../post-dummyjson-component/PostDummyjsonComponent.tsx";

type PostsPropsType = {
    posts: IPostDummyjson[]
}
const PostsDummyjsonComponent: FC<PostsPropsType> = ({posts}) => {
    return (
        <ul>
            {
                posts.map(post => <PostDummyjsonComponent key={post.id} post={post}/>)
            }
        </ul>
    )
}
export default PostsDummyjsonComponent