import {createBrowserRouter} from 'react-router'
import MainLayout from "../layouts/MainLayout.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element:<MainLayout/>, children: [
            {path: 'users/dummyjson', element: <UsersDummyjsonPage/>},
            {path: 'posts/dummyjson', element: <PostsDummyjsonPage/>},
        ]
    }
])