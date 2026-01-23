import {useOutletContext, useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import PaginationPage from "./PaginationPage.tsx";
import type {IPost} from "../models/post-model/IPost.ts";
import {getPostsOfUser, loadPosts} from "../services/posts.service.ts";
import PostsComponent from "../components/posts-component/PostsComponent.tsx";

const PostsPage = () => {
    const context = useOutletContext<{ userId: string } | null>();
    const userId = context?.userId;
    const [searchParams] = useSearchParams({page: '1'});
    const [posts, setPosts] = useState<IPost[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        if (userId) {
            getPostsOfUser(userId)
                .then(({posts}) => {
                    setPosts(posts);
                })
                .catch(() => {
                    refresh()
                        .then(() => getPostsOfUser(userId))
                        .then(({posts}) => {
                            setPosts(posts)
                        })
                });
        } else {
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
        }
    }, [searchParams, userId])
    return (
        <>
            {userId && posts.length === 0 && (
                <div style={{fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>
                    User №{userId} doesn't have any posts yet.
                </div>
            )}
            {posts.length > 0 && <PostsComponent posts={posts}/>}
            {!userId && total > 20 && <PaginationPage total={total} limit={20}/>}
        </>
    )
}
export default PostsPage;