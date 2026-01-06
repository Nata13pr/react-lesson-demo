import "./PostJsonplaceholderComponent.css"
import type {IPostJsonplaceholder} from "../../../models/IPostJsonplaceholder.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPostJsonplaceholder
}

const PostJsonplaceholderComponent: FC<PostPropsType> = ({post}) => {
    return (
        <li>
            <h2>Title - {post.title}</h2>
            <p>Body - {post.body}</p>
        </li>
    )
}
export default PostJsonplaceholderComponent