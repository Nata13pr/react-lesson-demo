import './PostTagDummyjsonComponent.css'
import type {FC} from "react";

type PostPropsType = {
    tag: string
}
const PostTagDummyjsonComponent: FC<PostPropsType> = ({tag}) => {
    return (
        <li className='tag'>
            {tag}
        </li>
    )
}
export default PostTagDummyjsonComponent