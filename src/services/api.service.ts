import type {IUser} from "../models/user-model/IUser.ts";
import type {IPost} from "../models/post-model/ IPost.ts";

const endpointUser = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/users';
const endpointPosts = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/posts';

const loadUsers = async (): Promise<IUser[]> => {
    const response = await fetch(endpointUser)
        .then(res => res.json());
    return response.users;
}

const loadPosts = async ():Promise<IPost[]> => {
    const response = await fetch(endpointPosts)
        .then(res => res.json());
    return response.posts;
}

export {
    loadUsers,
    loadPosts,
}