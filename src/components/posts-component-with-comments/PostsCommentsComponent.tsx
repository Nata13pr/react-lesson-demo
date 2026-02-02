import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import type {IComment} from "../../models/IComment.ts";
import PostCommentsComponent from "../post-component-with-comments/PostCommentsComponent.tsx";

type PostsPropsType = {
    posts: IPost[],
    comments: IComment[],
    id: string
}
const PostsCommentsComponent: FC<PostsPropsType> = ({posts, id, comments}) => {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {
                    posts
                        .filter(post => post.userId === Number(id))
                        .map(post => <PostCommentsComponent post={post} key={post.id} comments={comments}/>)
                }
            </ul>
        </div>
    )
}
export default PostsCommentsComponent;