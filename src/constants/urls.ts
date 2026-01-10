const baseUrl = import.meta.env.VITE_API_BASE_URL_DUMMYJSON;

export const urls = {
    users: {
        allUsers: baseUrl + '/users?limit=5&skip=',
    },
    posts: {
        allPosts: baseUrl + '/posts?limit=5&skip=',
    },
    comments: {
        allComments: baseUrl + '/comments?limit=5&skip=',
    }
}