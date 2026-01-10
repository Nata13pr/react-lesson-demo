const baseUrl = import.meta.env.VITE_API_BASE_URL_DUMMYJSON;

export const urls = {
    users: {
        allUsers: baseUrl + '/users?limit=5&skip=',
        allUserPostById: (id: string, skip: string) => `${baseUrl}/posts/user/${id}?limit=5&skip=${skip}`,
    },
    posts: {
        allPosts: baseUrl + '/posts?limit=5&skip=',
        allUserCommentsById: (id: string, skip: string) => `${baseUrl}/comments/post/${id}?limit=5&skip=${skip}`,
    },
    comments: {
        allComments: baseUrl + '/comments?limit=5&skip=',
    }
}