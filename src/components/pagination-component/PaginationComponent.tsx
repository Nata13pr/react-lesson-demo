import {type FC} from "react";
import "./PaginationComponent.css"

type PaginationPropsType = {
    page: number,
    handleOnClickPrev: () => void,
    handleOnClickNext: () => void,

}
const PaginationComponent: FC<PaginationPropsType> = ({page, handleOnClickPrev, handleOnClickNext}) => {

    return (
        <div className='buttons'>
            <button onClick={handleOnClickPrev}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                &#10094;  Previous
            </button>
            {page}
            <button onClick={handleOnClickNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                Next &#10095;
            </button>
        </div>
    )
}
export default PaginationComponent