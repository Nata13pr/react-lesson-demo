import './PostDummyjsonComponent.css'
import type {IPostDummyjson} from "../../../models/IPostDummyjson.ts";
import type {FC} from "react";
import PostTagDummyjsonComponent from "../post-tag-dummyjson-component/PostTagDummyjsonComponent.tsx";

type PostPropsType = {
    post: IPostDummyjson
}
const PostDummyjsonComponent: FC<PostPropsType> = ({post}) => {
    return (
        <li>
            <h2><strong>Title - {post.title}</strong></h2>
            <p>Body - {post.body}</p>
            <div>
                <strong>Tags:</strong>
                <ul>
                    {post.tags.map((tag, index) => <PostTagDummyjsonComponent key={index} tag={tag}/>)}
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
export default PostDummyjsonComponent