import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import {Navigate} from "react-router";
import MenuPage from "../pages/MenuPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import TodosPage from "../pages/TodosPage.tsx";
import QuotesPage from "../pages/QuotesPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/login" replace/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "menu",
                element: <MenuPage/>,
                children: [
                    {
                        path: 'products',
                        element: <ProductsPage/>
                    },
                    {
                        path: 'todos',
                        element: <TodosPage/>
                    },
                    {
                        path: 'quotes',
                        element: <QuotesPage/>
                    },
                    {
                        path: 'posts',
                        element: <PostsPage/>
                    },
                    {
                        path: 'carts',
                        element: <CartsPage/>
                    },
                    {
                        path: 'recipes',
                        element: <RecipesPage/>
                    },
                    {
                        path: 'users',
                        element: <UsersPage/>
                    },
                    {
                        path: 'comments',
                        element: <CommentsPage/>
                    },
                ]
            },
        ]
    }
])