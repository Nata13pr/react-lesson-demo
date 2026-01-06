import type {ICommentJsonplaceholder} from "../../../models/ICommentJsonplaceholder.ts";
import type {FC} from "react";

type CommentPropsType={
    comment:ICommentJsonplaceholder
}

const CommentJsonplaceholderComponent: FC<CommentPropsType>= ({comment}) => {
    return (
        <li>
            <h2>Name - {comment.name}.Email - {comment.email}</h2>
            <p>Body - {comment.body}</p>
        </li>
    )
}
export default CommentJsonplaceholderComponent