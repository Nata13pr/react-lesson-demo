import {useFetch} from "../../hooks/useFetch.tsx";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {
    const posts = useFetch<IPost, 'posts'>('https://dummyjson.com/posts')
    return (
        <div>
            <h2>Posts</h2>
            <ol>
                {posts?.posts.map(post => <PostComponent post={post} key={post.id}/>)}
            </ol>
        </div>
    )
}
export default PostsComponent