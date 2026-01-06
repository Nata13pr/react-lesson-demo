import {useEffect, useState} from "react";
import type {IPostDummyjson} from "../models/IPostDummyjson.ts";
import {loadDummysonPosts} from "../services/api.dummyjson.service.ts";
import PostsDummyjsonComponent from "../components/dummyjson/posts-dummyjson-component/PostsDummyjsonComponent.tsx";

const PostsDummyjsonPage=()=>{
    const [posts, setPosts]= useState<IPostDummyjson[]>([])

    useEffect(()=>{
        loadDummysonPosts()
            .then(response=>setPosts(response))
    },[])
    return (
        <PostsDummyjsonComponent posts={posts}/>
    )
}
export default PostsDummyjsonPage