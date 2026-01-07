import {useEffect, useState} from "react";
import type {IPost} from "../models/post-model/ IPost.ts";
import {loadPosts} from "../services/api.service.ts";
import PostsComponent from "../components/posts-component/PostsComponent.tsx";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        loadPosts()
            .then(response => setPosts(response))
    }, [])
    return (
        <PostsComponent posts={posts}/>
    )
}
export default PostsPage;