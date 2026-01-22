import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import type {ITodo} from "../models/ITodo.ts";
import {loadTodos} from "../services/todos.service.ts";
import TodosComponent from "../components/todos-component/TodosComponent.tsx";
import PaginationPage from "./PaginationPage.tsx";

const TodosPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadTodos(currentPage)
            .then(({todos, total}) => {
                setTodos(todos)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadTodos(currentPage))
                    .then(({todos, total}) => {
                        setTodos(todos)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <TodosComponent todos={todos}/>
            {total > 30 && <PaginationPage total={total} limit={30}/>}
        </>
    )
}
export default TodosPage;