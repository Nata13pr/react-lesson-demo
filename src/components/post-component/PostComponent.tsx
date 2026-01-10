import './PostComponent.css';
import type {FC} from "react";
import type {IPost} from "../../models/post-model/IPost.ts";
import PostTagComponent from "../post-tag-component/PostTagComponent.tsx";
import {useNavigate} from "react-router";

type PostPropsType = {
    post: IPost
}
const PostComponent: FC<PostPropsType> = ({post}) => {
    const navigation = useNavigate();
    const onButtonClickNavigateComments = () => {
        navigation('/users/' + post.userId + '/posts/' + post.id + '/comments')
    }
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
            <button className='button' onClick={onButtonClickNavigateComments}>Comments</button>
        </li>
    )
}
export default PostComponent