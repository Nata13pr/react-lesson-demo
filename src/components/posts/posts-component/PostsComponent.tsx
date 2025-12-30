import "./PostsComponent.css";
import {useEffect, useState} from "react";
import type {IPost} from "../../../models/IPost.ts";
import {loadPosts} from "../../../service/api.service.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        loadPosts()
            .then(response => setPosts(response.posts))
    }, [])
    return (
        <>
            {posts.map(post => (<PostComponent key={post.id} post={post}/>))}
        </>
    )
}
export default PostsComponent