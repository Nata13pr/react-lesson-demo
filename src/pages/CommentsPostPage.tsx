import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {postService} from "../services/api.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import type {IComment} from "../models/comment-model/IComment.ts";
import CommentsComponent from "../components/comments-component/CommentsComponent.tsx";

const CommentsPostPage = () => {
    const {postId} = useParams();

    const [comments, setComments] = useState<IComment[]>([]);
    const [totalComments, setTotalComments] = useState<number>(0);
    useEffect(() => {
            if (postId) {
                postService.getAllCommentsPostsById(postId, '0')
                    .then(value => {
                        setComments(value.comments)
                        setTotalComments(value.total)
                    })
            }
        }, [postId]
    )

    return (
        <>
            {totalComments > 0 ? <CommentsComponent comments={comments}/> :
                <h2 className='font-bold col-end-4 text-3xl'>Post with Id-{postId} doesn't have comments</h2>}
            {totalComments > 5 && <PaginationPage total={totalComments}/>}

        </>
    )
}
export default CommentsPostPage;