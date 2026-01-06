import {useEffect, useState} from "react";
import type {IPostJsonplaceholder} from "../models/IPostJsonplaceholder.ts";
import PostsJsonplaceholderComponent
    from "../components/jsonplaceholder/posts-jsonplaceholder-component/PostsJsonplaceholderComponent.tsx";
import {loadJsonplaceholderPosts} from "../services/api.jsonplaceholder.service.ts";

const PostsJsonplaceholderPage = () => {
    const [posts, setPosts] = useState<IPostJsonplaceholder[]>([])
    useEffect(() => {
        loadJsonplaceholderPosts()
            .then(response => setPosts(response))
    }, [])

    return (
        <PostsJsonplaceholderComponent posts={posts}/>
    )
}
export default PostsJsonplaceholderPage