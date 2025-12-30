import "./PostComponent.css"
import type {IPost} from "../../../models/IPost.ts";
import type {FC} from "react";
import TagComponent from "../tag-component/TagComponent.tsx";

type  PostPropsType = {
    post: IPost
}
const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <li>
            <h2>UserId - {post.userId}.Title - {post.title}</h2>
            <p>{post.body}</p>
            <p>Views - {post.views}</p>
            <p>Likes - {post.reactions.likes}</p>
            <p>Dislikes - {post.reactions.likes}</p>
            <ol>
                {post.tags.map((tag, index) => <TagComponent key={index} tag={tag}/>)}
            </ol>

        </li>
    )
}
export default PostComponent;