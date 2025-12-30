import "./CommentsComponent.css"
import {useEffect, useState} from "react";
import type {IComment} from "../../../models/IComment.ts";
import {loadComments} from "../../../service/api.service.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        loadComments()
            .then(response => setComments(response.comments))
    }, [])
    return (
        <ul>
            {comments.map((comment, index) => <CommentComponent key={index} comment={comment}/>)}
        </ul>
    )
}
export default CommentsComponent