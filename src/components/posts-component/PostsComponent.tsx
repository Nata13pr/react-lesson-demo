import './PostsComponent.css';
import type {FC} from "react";
import type {IPost} from "../../models/post-model/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";


type PostsPropsType = {
    posts: IPost[]
}
const PostsComponent: FC<PostsPropsType> = ({posts}) => {
    return (
        <div>
            <h2 className='text-red-800'><strong>Posts</strong></h2>
            <ul>
                {
                    posts.map(post => <PostComponent key={post.id} post={post}/>)
                }
            </ul>
        </div>
    )
}
export default PostsComponent