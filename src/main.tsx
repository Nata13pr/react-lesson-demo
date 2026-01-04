import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";


createRoot(document.getElementById('root')!)
    .render(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'products'} element={<ProductsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
