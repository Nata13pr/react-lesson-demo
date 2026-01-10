import {useEffect, useState} from "react";
import {postService} from "../services/api.service.ts";
import {Outlet, useSearchParams} from "react-router";
import PaginationPage from "./PaginationPage.tsx";
import type {IPost} from "../models/post-model/IPost.ts";
import PostsComponent from "../components/posts-component/PostsComponent.tsx";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [total, setTotal] = useState(0);
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const skip: number = Number(query.get('skip'))
        if (isNaN(skip)) {
            postService.getAllPosts('0')
                .then(response => {
                    setPosts(response.posts)
                    setTotal(response.total)
                    setQuery({limit: '5', skip: '0'})
                })
        } else {
            postService.getAllPosts(skip.toString())
                .then(response => {
                    setPosts(response.posts)
                    setTotal(response.total)
                })
        }

    }, [query])

    return (
        <>
            <Outlet/>
            <hr className='text-blue-950 border-7'/>
            <PaginationPage total={total}/>
            <PostsComponent posts={posts}/>
        </>
    )
}
export default PostsPage;
