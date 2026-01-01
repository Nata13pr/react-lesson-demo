import "./ImageComponent.css"
import type {FC} from "react";

type ImagePropsType = {
    image: string,
    title: string,
}
const ImageComponent: FC<ImagePropsType> = ({image, title}) => {
    return (
        <li>
            <img src={image} alt={title}/>
        </li>
    )
}
export default ImageComponent