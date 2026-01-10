import './CommentComponent.css';
import type {FC} from "react";
import type {IComment} from "../../models/comment-model/IComment.ts";

type CommentPropsType={
    comment: IComment
}
const CommentComponent:FC<CommentPropsType> = ({comment})=>{
    return (
        <li>
            <h2>{comment.body}</h2>

            <div>
                <strong>Автор:</strong> {comment.user.fullName} (@{comment.user.username})
            </div>
            <div>
                <p>Лайки: {comment.likes}</p>
                <small>Post ID: {comment.postId} | Comment ID: {comment.id}</small>
            </div>
        </li>
    )
}
export default CommentComponent