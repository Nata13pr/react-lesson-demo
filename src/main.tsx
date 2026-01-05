import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import MainLayout from "./layers/MainLayout.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import UsersJsonplaceholderPage from "./pages/UsersJsonplaceholderPage.tsx";
import UsersDummyjsonPage from "./pages/UsersDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "./pages/PostsJsonplaceholderPage.tsx";
import PostsDummyjsonPage from "./pages/PostsDummyjsonPage.tsx";
import CommentsJsonplaceholderPage from "./pages/CommentsJsonplaceholderPage.tsx";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={'jsonplaceholder'} element={<UsersJsonplaceholderPage/>}/>
                    <Route path={'dummyjson'} element={<UsersDummyjsonPage/>}/>
                </Route>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={'jsonplaceholder'} element={<CommentsJsonplaceholderPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={'jsonplaceholder'} element={<PostsJsonplaceholderPage/>}/>
                    <Route path={'dummyjson'} element={<PostsDummyjsonPage/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
