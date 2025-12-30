import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";
import './PostComponent.css'

type PostPropType = {
    post: IPost
}
const PostComponent: FC<PostPropType> = ({post}) => {
    return (
        <li>
            <h2>Post ID - {post.userId}.Post number - {post.id}</h2>
            <h3>Title - {post.title}</h3>
            <p>Body - {post.body}</p>
        </li>
    )
}
export default PostComponent