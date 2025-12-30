import type { ITodosList} from "../models/ITodo.ts";

const endpointTodos=import.meta.env.VITE_API_BASE_URL + '/todos';

const loadTodos=async ():Promise<ITodosList>=>{
    return await fetch(endpointTodos)
        .then(value => value.json())
}
export{
    loadTodos,
}