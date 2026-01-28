import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPost
}

const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <li>
            <h2>Tittle - {post.title}</h2>
            <p>{post.body}</p>
        </li>
    )
}
export default PostComponent