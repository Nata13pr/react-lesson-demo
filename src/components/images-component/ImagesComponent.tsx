import "./ImagesComponent.css"
import type {FC} from "react";
import ImageComponent from "../image-component/ImageComponent.tsx";


type ImagePropsType = {
    images: string[],
    title: string,
}
const ImagesComponent: FC<ImagePropsType> = ({images, title}) => {
    return (
        <div>
            <p><span>Images : </span></p>
            <ul className='images'>
                {images.map((image, index) => <ImageComponent key={index} image={image}
                                                              title={title}/>)}
            </ul>
        </div>
    )
}
export default ImagesComponent