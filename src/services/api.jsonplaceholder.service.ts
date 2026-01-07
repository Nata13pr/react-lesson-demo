import type {IUserJsoplaceholder} from "../models/jsonplaceholder-user-model/IUserJsoplaceholder.ts";
import type {IPostJsonplaceholder} from "../models/IPostJsonplaceholder.ts";
import type {ICommentJsonplaceholder} from "../models/ICommentJsonplaceholder.ts";

const endpointUserJsonplaceholder = import.meta.env.VITE_API_BASE_URL_JSONPLACEHOLDER + '/users';
const endpointPostsJsonplaceholder = import.meta.env.VITE_API_BASE_URL_JSONPLACEHOLDER + '/posts';
const endpointCommentsJsonplaceholder = import.meta.env.VITE_API_BASE_URL_JSONPLACEHOLDER + '/comments';


const loadJsonplaceholderUsers = async (): Promise<IUserJsoplaceholder[]> => {
    return await fetch(endpointUserJsonplaceholder)
        .then(res => res.json());
}

const loadJsonplaceholderPosts = async (): Promise<IPostJsonplaceholder[]> => {
    return await fetch(endpointPostsJsonplaceholder)
        .then(res => res.json());
}

const loadJsonplaceholderComments = async (): Promise<ICommentJsonplaceholder[]> => {
    return await fetch(endpointCommentsJsonplaceholder)
        .then(res => res.json());
}

export {
    loadJsonplaceholderUsers,
    loadJsonplaceholderPosts,
    loadJsonplaceholderComments,
}