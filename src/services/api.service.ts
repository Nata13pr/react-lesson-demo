const endpointUserDummyson = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/users';
const endpointPostsDummyson = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/posts';

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

export {
    loadDummysonUsers,
    loadDummysonPosts,
}