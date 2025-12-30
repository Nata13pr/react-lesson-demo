import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";
import './PostComponent.css'

type PostPropType = {
    post: IPost
}
const PostComponent: FC<PostPropType> = ({post}) => {
    return (
        <li>
            <h2>User ID - {post.userId}.Task number - {post.id}</h2>
            <h3>Title - {post.title}</h3>
            <p>Body - {post.body}</p>
        </li>
    )
}
export default PostComponent