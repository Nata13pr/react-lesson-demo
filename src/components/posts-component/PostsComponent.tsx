import "./PostsComponent.css"
import type {FC} from "react";
import type {IPost} from "../../models/post-model/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";

type PostsPropsType = {
    posts: IPost[]
}
const PostsComponent: FC<PostsPropsType> = ({posts}) => {
    return (
        <ul className='posts'>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </ul>
    )
}
export default PostsComponent