import type {ICommentDummyjson} from "../models/ICommentDummyjson.ts";
import {useEffect, useState} from "react";
import {loadDummysonComments} from "../services/api.dummyjson.service.ts";
import CommentsDummyjsonComponent
    from "../components/dummyjson/comments-dummyjson-component/CommentsDummyjsonComponent.tsx";

const CommentsDummyjsonPage = () => {
    const [comments, setComments] = useState<ICommentDummyjson[]>([])
    useEffect(() => {
        loadDummysonComments()
            .then(response => setComments(response))
    }, [])
    return (
        <CommentsDummyjsonComponent comments={comments}/>
    )
}
export default CommentsDummyjsonPage;