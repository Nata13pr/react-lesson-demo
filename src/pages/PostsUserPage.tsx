import {Outlet, useParams} from "react-router";
import {useEffect, useState} from "react";
import type {IPost} from "../models/post-model/IPost.ts";
import {userService} from "../services/api.service.ts";
import PostsComponent from "../components/posts-component/PostsComponent.tsx";
import PaginationPage from "./PaginationPage.tsx";

const PostsUserPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [totalPosts, setTotalPosts] = useState<number>(0);
    useEffect(() => {
            if (id) {
                userService.getAllUserPostsById(id, '0')
                    .then(value => {
                        setPosts(value.posts)
                        setTotalPosts(value.total)
                    })
            }
        }, [id]
    )
    return (
        <>
            <Outlet/>
            {totalPosts > 0 ? <PostsComponent posts={posts}/> :
                <h2 className='font-bold col-end-4 text-3xl'>User with Id-{id} doesn't have posts</h2>}
            {totalPosts > 5 && <PaginationPage total={totalPosts}/>}

        </>
    )
}
export default PostsUserPage;