import "./PostComponent.css"
import type {FC} from "react";
import type {IPost} from "../../models/post-model/IPost.ts";
import TagPostComponent from "../tag-post-component/TagPostComponent.tsx";

type PostPropsType = {
    post: IPost
}
const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <li className='posts post-container'>
            <div className="post-card">
                <div className="post-header">
                    <div className="user-info">
                        <div className="avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </div>
                        <div className="user-details">
                            <span className="user-id">User ID: {post.userId}</span>
                            <span className="post-id">
                        <svg style={{width: '12px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                        Post ID: {post.id}
                    </span>
                        </div>
                    </div>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-body">
                        {post.body}
                    </p>
                </div>
                <div className="tags-container">
                    {post.tags.map((tag, index) => <TagPostComponent key={index} tag={tag}/>)}
                </div>

                <div className="post-footer">
                    <div className="reactions">
                        <div className="reaction-item likes">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                            <span>{post.reactions.likes}</span>
                        </div>
                        <div className="reaction-item dislikes">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M10 14H5.236a2 2 0 01-1.789-2.894l2.3-4.6A2 2 0 017.528 5h4.236a2 2 0 011.914 1.415l1.092 4.135a2 2 0 01-1.936 2.45H12"/>
                            </svg>
                            <span>{post.reactions.dislikes}</span>
                        </div>
                    </div>

                    <div className="views">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <span>{post.views} views</span>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default PostComponent