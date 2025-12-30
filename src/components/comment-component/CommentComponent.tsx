import "./CommentComponent.css"
import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentsPropsType = {
    comment: IComment
}
const CommentComponent: FC<CommentsPropsType> = ({comment}) => {
    return (
        <li>
            <h2>Post ID - {comment.postId}.Comment id - {comment.id}.Email - <span>{comment.email}</span></h2>
            <h3>Name -{comment.name}</h3>
            <p>Body - {comment.body}</p>
        </li>
    )
}
export default CommentComponent;