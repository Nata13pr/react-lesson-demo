import "./ButtonsComponent.css"
import type {FC} from "react";
import {useNavigate} from "react-router";


type ButtonsPropsType = {
    id: number
}
const ButtonsComponent: FC<ButtonsPropsType> = ({id}) => {

    const navigate = useNavigate();

    const handleOnClickCarts = () => {
        navigate('/menu/me/carts/user/' + id)
    }
    const handleOnClickPosts = () => {
        navigate('/menu/me/posts/user/' + id)
    }
    const handleOnClickTodos = () => {
        navigate('/menu/me/todos/user/' + id)
    }

    return (
        <>
            {id &&
                <ul className='list-buttom-component'>
                    <li>
                        <button onClick={handleOnClickCarts}>Carts</button>
                    </li>
                    <li>
                        <button onClick={handleOnClickPosts}>Posts</button>
                    </li>
                    <li>
                        <button onClick={handleOnClickTodos}>Todos</button>
                    </li>
                </ul>
            }
        </>

    )
}
export default ButtonsComponent
