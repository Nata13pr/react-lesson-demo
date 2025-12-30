import {useEffect, useState} from "react";
import {getTodos} from "../../service/api.service.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import type {ITodo} from "../../models/ITodo.ts";
import './TodosComponent.css'

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos()
            .then(response => {
                setTodos(response);
            })
    }, [])
    return (
        <ul>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </ul>
    )
}
export default TodosComponent