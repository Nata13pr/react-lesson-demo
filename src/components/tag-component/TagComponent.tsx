import "./TagComponent.css"
import type {FC} from "react";

type TagPropsType = {
    tag: string
}
const TagComponent: FC<TagPropsType> = ({tag}) => {
    return (
            <span className="tag">#{tag}</span>
    )
}
export default TagComponent