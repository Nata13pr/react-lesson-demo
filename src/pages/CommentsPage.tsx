import {useEffect, useState} from "react";
import {commentService} from "../services/api.service.ts";
import {useSearchParams} from "react-router";
import PaginationPage from "./PaginationPage.tsx";
import type {IComment} from "../models/comment-model/IComment.ts";
import CommentsComponent from "../components/comments-component/CommentsComponent.tsx";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [total, setTotal] = useState(0);
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const skip: number = Number(query.get('skip'))
        if (isNaN(skip)) {
            commentService.getAllComments('0')
                .then(response => {
                    setComments(response.comments)
                    setTotal(response.total)
                    setQuery({limit: '5', skip: '0'})
                })
        } else {
            commentService.getAllComments(skip.toString())
                .then(response => {
                    setComments(response.comments)
                    setTotal(response.total)
                })
        }

    }, [query])


    return (
        <>
            <PaginationPage total={total}/>
            <CommentsComponent comments={comments}/>
        </>
    )
}
export default CommentsPage;
