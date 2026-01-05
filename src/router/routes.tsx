import {createBrowserRouter} from 'react-router'
import MainLayout from "../layers/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersJsonplaceholderPage from "../pages/UsersJsonplaceholderPage.tsx";
import UsersDummyjsonPage from "../pages/UsersDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "../pages/PostsJsonplaceholderPage.tsx";
import PostsDummyjsonPage from "../pages/PostsDummyjsonPage.tsx";
import CommentsJsonplaceholderPage from "../pages/CommentsJsonplaceholderPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <UsersJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <UsersDummyjsonPage/>},
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <PostsJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <PostsDummyjsonPage/>},
                ]
            },

            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <CommentsJsonplaceholderPage/>},
                ]
            },
        ]
    }
])