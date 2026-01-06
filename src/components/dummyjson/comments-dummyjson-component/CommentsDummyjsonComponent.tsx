import './CommentsDummyjsonComponent.css'
import type {FC} from "react";
import CommentDummyjsonComponent from "../comment-dummyjson-component/CommentDummyjsonComponent.tsx";
import type {ICommentDummyjson} from "../../../models/ICommentDummyjson.ts";

type CommentsPropsType={
    comments: ICommentDummyjson[]
}
const CommentsDummyjsonComponent:FC<CommentsPropsType>=({comments})=>{
    return (
        <ul>
            {comments.map(comment=><CommentDummyjsonComponent comment={comment} key={comment.id}/>)}
        </ul>
    )
}
export default CommentsDummyjsonComponent