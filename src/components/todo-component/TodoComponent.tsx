import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";
import './TodoComponent.css'

type TodoPropType = {
    todo: ITodo
}

const TodoComponent: FC<TodoPropType> = ({todo}) => {
    return (
        <>
            <li>
                <h2>User ID - {todo.userId}.Task number - {todo.id}</h2>
                <p>Title - {todo.title}.Status - {todo.completed.toString()}</p>
            </li>
        </>
    )
}
export default TodoComponent