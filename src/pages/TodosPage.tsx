import {useOutletContext, useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import type {ITodo} from "../models/ITodo.ts";
import {getTodosOfUser, loadTodos} from "../services/todos.service.ts";
import TodosComponent from "../components/todos-component/TodosComponent.tsx";
import PaginationPage from "./PaginationPage.tsx";

const TodosPage = () => {
    const context = useOutletContext<{ userId: string } | null>();
    const userId = context?.userId;
    const [searchParams] = useSearchParams({page: '1'});
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        if (userId) {
            getTodosOfUser(userId)
                .then(({todos}) => {
                    setTodos(todos);
                })
                .catch(() => {
                    refresh()
                        .then(() => getTodosOfUser(userId))
                        .then(({todos}) => {
                            setTodos(todos)
                        })
                });
        } else {
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
        }

    }, [searchParams])
    return (
        <>
            {userId && todos.length === 0 && (
                <div style={{fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>
                    User №{userId} doesn't have any todos yet.
                </div>
            )}
            {todos.length > 0 && <TodosComponent todos={todos}/>}
            {!userId && total > 30 && <PaginationPage total={total} limit={30}/>}
        </>
    )
}
export default TodosPage;