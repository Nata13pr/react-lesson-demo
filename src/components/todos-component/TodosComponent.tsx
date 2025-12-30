import './TodosComponent.css'
import {useEffect, useState} from "react";
import type {ITodo} from "../../models/ITodo.ts";
import {loadTodos} from "../../service/api.service.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        loadTodos()
            .then(response => setTodos(response.todos));
    }, [])
    return (
        <ul>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </ul>
    )
}
export default TodosComponent;