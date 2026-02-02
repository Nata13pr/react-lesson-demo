import './PostComponent.css'
import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import type {IComment} from "../../models/IComment.ts";

type PostPropsType = {
    post: IPost,
    comments?: IComment[]
}

const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <li>
            <h3>Post with userId {post.userId}</h3>
            <h4>Post id {post.id}</h4>
            Tittle - {post.title.charAt(0).toUpperCase() + post.title.slice(1).toLowerCase()}
        </li>
    )
}
export default PostComponent;