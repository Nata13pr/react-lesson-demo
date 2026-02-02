import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import type {IComment} from "../../models/IComment.ts";
import CommentsComponent from "../comments-component/CommentsComponent.tsx";

type PostPropsType = {
    post: IPost,
    comments: IComment[]
}

const PostCommentsComponent: FC<PostPropsType> = ({post, comments}) => {
     const filteredComments = comments.filter((comment) => comment.postId === Number(post.id));
    return (
        <li>
            <h3>Post with userId {post.userId}</h3>
            <h4>Post id {post.id}</h4>
            Tittle - {post.title.charAt(0).toUpperCase() + post.title.slice(1).toLowerCase()}
            <CommentsComponent comments={filteredComments}/>
        </li>
    )
}
export default PostCommentsComponent;