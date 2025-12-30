import type {IComment} from "../models/IComment.ts";

const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

const loadComments = async (): Promise<IComment[]> => {
    return await fetch(endpointComments)
        .then(value => value.json())
}

export {
    loadComments,
}