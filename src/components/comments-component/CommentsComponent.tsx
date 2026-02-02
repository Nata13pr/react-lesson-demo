import './CommentsComponent.css'
import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

type CommentsPropsType = {
    comments: IComment[]
}
const CommentsComponent: FC<CommentsPropsType> = ({comments}) => {
    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {
                    comments.map((comment) => <CommentComponent comment={comment} key={comment.id}/>)
                }
            </ul>
        </div>
    )
}
export default CommentsComponent;