import "./CommentComponent.css"
import type {FC} from "react";
import type {IComment} from "../../models/comment-model/IComment.ts";

type CommentPropsType = {
    comment: IComment
}
const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <li className='comment'>
            <article className="comment-card">
                <header className="comment-header">
                    <div className="user-avatar" title="User ID: 105">EW</div>
                    <div className="user-info">
                        <span className="full-name">{comment.user.fullName}</span>
                        <span className="username">@{comment.user.username}</span>
                    </div>
                </header>

                <div className="comment-body">
                    {comment.body}
                </div>
                <footer className="comment-footer">
                    <div className="likes-count">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span>{comment.likes}</span>
                    </div>
                    <span className="post-id">Post ID: {comment.postId}</span>
                </footer>
            </article>
        </li>
    )
}
export default CommentComponent