import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import type {IPost} from "../models/post-model/IPost.ts";
import {loadPosts} from "../services/posts.service.ts";
import PostsComponent from "../components/posts-component/PostsComponent.tsx";

const PostsPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [posts, setPosts] = useState<IPost[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadPosts(currentPage)
            .then(({posts, total}) => {
                setPosts(posts)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadPosts(currentPage))
                    .then(({posts, total}) => {
                        setPosts(posts)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <PostsComponent posts={posts}/>
            {total > 20 && <PaginationPage total={total} limit={20}/>}
        </>
    )
}
export default PostsPage;