import './CommentsComponent.css';
import type {FC} from "react";
import CommentComponent from "../comment-component/CommentComponent.tsx";
import type {IComment} from "../../models/comment-model/IComment.ts";

type CommentsPropsType = {
    comments: IComment[]
}
const CommentsComponent: FC<CommentsPropsType> = ({comments}) => {
    return (
        <ul>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </ul>
    )
}
export default CommentsComponent