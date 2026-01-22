import "./TodoComponent.css"
import type {FC} from "react";
import type {ITodo} from "../../models/ITodo.ts";

type TodosPropsType = {
    todo: ITodo
}
const TodoComponent: FC<TodosPropsType> = ({todo}) => {
    return (
        <li>
            <div className='todo'>
                <strong>{todo.todo}</strong> (Користувач: {todo.userId})
                {todo.completed ? " ✅" : " ❌"}
            </div>
        </li>
    )
}
export default TodoComponent