import  "./CommentDummyjsonComponent.css"
import type {ICommentDummyjson} from "../../../models/ICommentDummyjson.ts";
import type {FC} from "react";

type CommentPropsType={
    comment: ICommentDummyjson
}
const CommentDummyjsonComponent:FC<CommentPropsType> = ({comment})=>{
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
export default CommentDummyjsonComponent