import "./ImageComponent.css"
import type {FC} from "react";

type ImagePropsType = {
    img: string
}
const ImageComponent: FC<ImagePropsType> = ({img}) => {
    return (
        <img
            src={img}
            alt="view"
            style={{width: '100%', borderRadius: '4px'}}
        />
    )
}
export default ImageComponent