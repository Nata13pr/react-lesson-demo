const endpointUserJsonplaceholder = import.meta.env.VITE_API_BASE_URL_JSONPLACEHOLDER + '/users';
const endpointPostsJsonplaceholder = import.meta.env.VITE_API_BASE_URL_JSONPLACEHOLDER + '/posts';
const endpointCommentsJsonplaceholder = import.meta.env.VITE_API_BASE_URL_JSONPLACEHOLDER + '/comments';


const loadJsonplaceholderUsers = async () => {
    return  await fetch(endpointUserJsonplaceholder)
        .then(res => res.json());
}

const loadJsonplaceholderPosts = async () => {
    return  await fetch(endpointPostsJsonplaceholder)
        .then(res => res.json());
}

const loadJsonplaceholderComments = async () => {
    return  await fetch(endpointCommentsJsonplaceholder)
        .then(res => res.json());
}

export {
    loadJsonplaceholderUsers,
    loadJsonplaceholderPosts,
    loadJsonplaceholderComments,
}