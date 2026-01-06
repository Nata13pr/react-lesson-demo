import type {ICommentJsonplaceholder} from "../../../models/ICommentJsonplaceholder.ts";
import type {FC} from "react";
import CommentJsonplaceholderComponent from "../comment-jsonplaceholder-component/CommentJsonplaceholderComponent.tsx";

type CommentsPropsType={
    comments:ICommentJsonplaceholder[]
}

const CommentsJsonplaceholderComponent:FC<CommentsPropsType>=({comments})=>{
    return (
       <ul>
           {
               comments.map(comment=><CommentJsonplaceholderComponent key={comment.id} comment={comment}/>)
           }
       </ul>
    )
}
export default CommentsJsonplaceholderComponent