import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout.tsx";
import UsersDummyjsonPage from "./pages/UsersDummyjsonPage.tsx";
import UsersJsonplaceholderPage from "./pages/UsersJsonplaceholderPage.tsx";
import PostsDummyjsonPage from "./pages/PostsDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "./pages/PostsJsonplaceholderPage.tsx";
import CommentsDummyjsonPage from "./pages/CommentsDummyjsonPage.tsx";
import CommentsJsonplaceholderPage from "./pages/CommentsJsonplaceholderPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users/dummyjson'} element={<UsersDummyjsonPage/>}/>
                <Route path={'users/jsonplaceholder'} element={<UsersJsonplaceholderPage/>}/>
                <Route path={'posts/dummyjson'} element={<PostsDummyjsonPage/>}/>
                <Route path={'posts/jsonplaceholder'} element={<PostsJsonplaceholderPage/>}/>
                <Route path={'comments/dummyjson'} element={<CommentsDummyjsonPage/>}/>
                <Route path={'comments/jsonplaceholder'} element={<CommentsJsonplaceholderPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

