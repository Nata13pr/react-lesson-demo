import "./CommentComponent.css"
import type {IComment} from "../../../models/IComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IComment
}
const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <li>
            <h2>UserName - {comment.user.username}.FullName - {comment.user.fullName}</h2>
            <p>Body - {comment.body}</p>
            <p>Likes - {comment.likes}</p>
        </li>
    )
}
export default CommentComponent