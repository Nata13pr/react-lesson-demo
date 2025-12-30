import type {ITodosList} from "../models/ITodo.ts";
import type {IPostList} from "../models/IPost.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

const loadTodos = async (): Promise<ITodosList> => {
    return await fetch(endpointTodos)
        .then(value => value.json())
}

const loadPosts = async (): Promise<IPostList> => {
    return await fetch(endpointPosts)
        .then(value => value.json())
}
const loadComments = async (): Promise<any> => {
    return await fetch(endpointComments)
        .then(value => value.json())
}
export {
    loadTodos,
    loadPosts,
    loadComments
}