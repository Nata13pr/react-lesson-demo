import {createBrowserRouter} from 'react-router'
import MainLayout from "../layouts/MainLayout.tsx";
import UsersDummyjsonPage from "../pages/UsersDummyjsonPage.tsx";
import UsersJsonplaceholderPage from "../pages/UsersJsonplaceholderPage.tsx";
import PostsDummyjsonPage from "../pages/PostsDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "../pages/PostsJsonplaceholderPage.tsx";
import CommentsJsonplaceholderPage from "../pages/CommentsJsonplaceholderPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'users/dummyjson', element: <UsersDummyjsonPage/>},
            {path: 'users/jsonplaceholder', element: <UsersJsonplaceholderPage/>},
            {path: 'posts/dummyjson', element: <PostsDummyjsonPage/>},
            {path: 'posts/jsonplaceholder', element: <PostsJsonplaceholderPage/>},
            {path: 'comments/dummyjson', element: <PostsDummyjsonPage/>},
            {path: 'comments/jsonplaceholder', element: <CommentsJsonplaceholderPage/>},
        ]
    }
])