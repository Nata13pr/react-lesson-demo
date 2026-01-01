import './TagComponent.css'
import type {FC} from "react";

type TagPropsType = {
    tag: string
}
const TagComponent: FC<TagPropsType> = ({tag}) => {
    return (
        <li>{tag}</li>
    )
}
export default TagComponent