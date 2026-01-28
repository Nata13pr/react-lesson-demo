import {useFetch} from "../../hooks/useFetch.tsx";
import type {ITodo} from "../../models/ITodo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

const TodosComponent = () => {
    const todos = useFetch<ITodo, 'todos'>('https://dummyjson.com/todos')

    return (
        <div>
            <h2>Todos</h2>
            <ol>
                {todos?.todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)}
            </ol>
        </div>
    )
}
export default TodosComponent