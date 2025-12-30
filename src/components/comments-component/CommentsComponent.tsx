import "./CommentsComponent.css"
import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {loadComments} from "../../service/api.service.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        async function fetchComments() {
            const allComments = await loadComments();
            setComments(allComments);
        }

        fetchComments()
    }, [])
    return (
        <>
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </>
    )
}
export default CommentsComponent