import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import {Navigate} from "react-router";
import MenuPage from "../pages/MenuPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";

export const routes = createBrowserRouter([
    {
        // path: "/",
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
                    }
                ]
            },
        ]
    }
])