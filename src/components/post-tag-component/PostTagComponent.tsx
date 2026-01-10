import './PostTagComponent.css';
import type {FC} from "react";


type PostPropsType = {
    tag: string
}
const PostTagComponent: FC<PostPropsType> = ({tag}) => {
    return (
        <li className='tag'>
            {tag}
        </li>
    )
}
export default PostTagComponent