import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IComment
}

const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <li>
            <p>{comment.body}</p>
        </li>
    )
}
export default CommentComponent