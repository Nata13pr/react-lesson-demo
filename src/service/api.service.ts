import type {IPost} from "../models/IPost.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';

const loadPosts = async (): Promise<IPost[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json())
}
export {
    loadPosts
}