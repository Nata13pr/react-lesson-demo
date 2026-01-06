import type {IUserDummyjson} from "../models/dummyjson-user-model/IUserDummyjson.ts";

const endpointUserDummyson = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/users';
const endpointPostsDummyson = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/posts';
const endpointCommentsDummyson = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/comments';


const loadDummysonUsers = async (): Promise<IUserDummyjson[]> => {
    const response = await fetch(endpointUserDummyson)
        .then(res => res.json());
    return response.users;
}

const loadDummysonPosts = async () => {
    const response = await fetch(endpointPostsDummyson)
        .then(res => res.json());
    return response.posts;
}

const loadDummysonComments = async () => {
    const response = await fetch(endpointCommentsDummyson)
        .then(res => res.json());
    return response.comments;
}

export {
    loadDummysonUsers,
    loadDummysonPosts,
    loadDummysonComments,
}