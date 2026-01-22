import "./CommentsComponent.css"
import type {FC} from "react";
import type {IComment} from "../../models/comment-model/IComment.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

type CommentsPropsType = {
    comments: IComment[]
}
const CommentsComponent: FC<CommentsPropsType> = ({comments}) => {
    return (
        <ul className='comments'>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </ul>
    )
}
export default CommentsComponent