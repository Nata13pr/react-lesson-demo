export interface ITodo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

export interface ITodosList {
    todos: ITodo[];
    limit: number,
    skip: number,
    total: number
}