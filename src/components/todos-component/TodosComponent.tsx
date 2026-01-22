import "./TodosComponent.css"
import type {FC} from "react";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import type {ITodo} from "../../models/ITodo.ts";

type TodosPropsType = {
    todos: ITodo[]
}
const TodosComponent: FC<TodosPropsType> = ({todos}) => {
    return (
        <ul className='todos'>
            {
                todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </ul>
    )
}
export default TodosComponent