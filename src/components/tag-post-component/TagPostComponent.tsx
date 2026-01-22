import type {FC} from "react";

type TagPostsPropsType = {
    tag: string,
}

const TagPostComponent: FC<TagPostsPropsType> = ({tag}) => {
    return (
        <span className="tag">{tag}</span>
    )
}
export default TagPostComponent;