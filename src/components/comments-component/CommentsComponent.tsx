import {useFetch} from "../../hooks/useFetch.tsx";
import type {IComment} from "../../models/IComment.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {
    const comments = useFetch<IComment, 'comments'>('https://dummyjson.com/comments')
    return (
        <div>
            <h2>Comments</h2>
            <ol>
                {comments?.comments && comments.comments.map((comment, index) => <CommentComponent comment={comment}
                                                                                                   key={index}/>)}
            </ol>
        </div>
    )
}
export default CommentsComponent