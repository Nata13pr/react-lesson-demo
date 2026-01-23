import {useOutletContext, useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import {getCommentsOfUser, loadComments} from "../services/comments.service.ts";
import type {IComment} from "../models/comment-model/IComment.ts";
import CommentsComponent from "../components/comments-component/CommentsComponent.tsx";

const CommentsPage = () => {
    const context = useOutletContext<{ postId: string } | null>();
    const postId = context?.postId;
    const [searchParams] = useSearchParams({page: '1'});
    const [comments, setComments] = useState<IComment[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        if (postId) {
            getCommentsOfUser(postId)
                .then(({comments}) => {
                    setComments(comments);
                })
                .catch(() => {
                    refresh()
                        .then(() => getCommentsOfUser(postId))
                        .then(({comments}) => {
                            setComments(comments)
                        })
                });
        } else {
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
        }
    }, [searchParams])
    return (
        <>
            {postId && comments.length === 0 && (
                <div style={{fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>
                    User №{postId} doesn't have any comments yet.
                </div>
            )}
            {comments.length > 0 && <CommentsComponent comments={comments}/>}
            {!postId && total > 15 && <PaginationPage total={total} limit={15}/>}
        </>
    )
}
export default CommentsPage;