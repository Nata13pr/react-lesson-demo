import "./PostComponent.css"
import type {IPost} from "../../models/post-model/ IPost.ts";
import type {FC} from "react";
import PostTagComponent from "../post-tag-component/PostTagComponent.tsx";

type PostsPropsType={
    post:IPost
}
const PostComponent:FC<PostsPropsType>=({post})=>{
    return (
        <li>
            <h2><strong>Title - {post.title}</strong></h2>
            <p>Body - {post.body}</p>
            <div>
                <strong>Tags:</strong>
                <ul>
                    {post.tags.map((tag, index) => <PostTagComponent key={index} tag={tag}/>)}
                </ul>
            </div>
            <div>
                <p>Likes: {post.reactions.likes}</p>
                <p>Dislikes: {post.reactions.dislikes}</p>
                <p>Views: {post.views}</p>
            </div>
            <small>Post ID: {post.id} | User ID: {post.userId}</small>
        </li>
    )
}
export default PostComponent