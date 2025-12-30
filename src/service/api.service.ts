import type {ITodo} from "../models/ITodo.ts";

const baseUrl=import.meta.env.VITE_API_URL

const getTodos=async ():Promise<ITodo[]>=>{
    return await fetch(baseUrl)
        .then(value => value.json())
}
export{
    getTodos
}