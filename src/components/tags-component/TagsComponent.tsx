import './TagsComponent.css'
import type {FC} from "react";
import TagComponent from "../tag-component/TagComponent.tsx";

type TagPropsType = {
    tags: string[]
}
const TagsComponent: FC<TagPropsType> = ({tags}) => {
    return (
        <div>
            <p><span>Tags :</span></p>
            <ul>
                {tags.map((tag, index) => <TagComponent key={index} tag={tag}/>)}
            </ul>
        </div>
    )
}
export default TagsComponent