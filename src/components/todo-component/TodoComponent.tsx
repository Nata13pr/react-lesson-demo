import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";

type TodoPropsType = {
    todo: ITodo
}


const TodoComponent:FC<TodoPropsType>=({todo})=>{
    return (
        <li>
            <h2>Task - {todo.todo}</h2>
        </li>
    )
}
export default TodoComponent