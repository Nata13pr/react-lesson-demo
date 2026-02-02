import './CommentComponent.css'
import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";

type CommentsPropsType = {
    comment: IComment
}

const CommentComponent: FC<CommentsPropsType> = ({comment}) => {

    return (
        <li>
            Name - {comment.name} with postId {comment.postId}
        </li>
    )
}
export default CommentComponent;