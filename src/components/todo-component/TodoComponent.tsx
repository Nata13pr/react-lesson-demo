import "./TodoComponent.css"
import type {FC} from "react";
import type {ITodo} from "../../models/ITodo.ts";

type TodoPropsType={
    todo:ITodo
}
const TodoComponent:FC<TodoPropsType>=({todo})=>{
    return(
        <li>
            <h2>User ID - {todo.userId}.Task number - {todo.id}</h2>
            <p>Title - {todo.todo}.Status - {todo.completed.toString()}</p>
        </li>
    )
}
export default TodoComponent;