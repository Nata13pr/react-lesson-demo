import {useEffect, useState} from "react";
import type {ICommentJsonplaceholder} from "../models/ICommentJsonplaceholder.ts";
import {loadJsonplaceholderComments} from "../services/api.jsonplaceholder.service.ts";
import CommentsJsonplaceholderComponent
    from "../components/jsonplaceholder/comments-jsonplaceholder-component/CommentsJsonplaceholderComponent.tsx";

const CommentsJsonplaceholderPage = () => {
    const [comments, setComments] = useState<ICommentJsonplaceholder[]>([])
    useEffect(() => {
        loadJsonplaceholderComments()
            .then(response => setComments(response))
    }, [])
    return (
        <CommentsJsonplaceholderComponent comments={comments}/>
    )
}

export default CommentsJsonplaceholderPage