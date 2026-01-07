import "./PostTagComponent.css"
import type {FC} from "react";

type PostTagPropsType = {
    tag: string
}
const PostTagComponent: FC<PostTagPropsType> = ({tag}) => {
    return (
        <li>
            {tag}
        </li>
    )
}
export default PostTagComponent