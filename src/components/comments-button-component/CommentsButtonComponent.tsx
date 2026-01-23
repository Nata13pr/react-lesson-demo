import "./CommentsButtonComponent.css"
import type {FC} from "react";
import {useNavigate} from "react-router";

type ButtonsPropsType = {
    postId: number
}
const CommentsButtonComponent: FC<ButtonsPropsType> = ({postId}) => {

    const navigate = useNavigate();
    const handleOnClickComments = () => {
        navigate('comments/' + postId)
    }

    return (
        <div className='list'>
            {postId &&
                <button onClick={handleOnClickComments}>Comments</button>
            }
        </div>

    )
}
export default CommentsButtonComponent
