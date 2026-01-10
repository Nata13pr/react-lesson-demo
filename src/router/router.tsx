import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import PostsUserPage from "../pages/PostsUserPage.tsx";
import CommentsPostPage from "../pages/CommentsPostPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {
                        path: ':id/posts', element: <PostsUserPage/>, children: [
                            {path: ':postId/comments', element: <CommentsPostPage/>}
                        ]
                    },
                ]
            },
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
])


