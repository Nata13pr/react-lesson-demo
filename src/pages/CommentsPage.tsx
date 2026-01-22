import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import {loadComments} from "../services/comments.service.ts";
import type {IComment} from "../models/comment-model/IComment.ts";
import CommentsComponent from "../components/comments-component/CommentsComponent.tsx";

const PostsPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [comments, setComments] = useState<IComment[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadComments(currentPage)
            .then(({comments, total}) => {
                setComments(comments)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadComments(currentPage))
                    .then(({comments, total}) => {
                        setComments(comments)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <CommentsComponent comments={comments}/>
            {total > 15 && <PaginationPage total={total} limit={15}/>}
        </>
    )
}
export default PostsPage;