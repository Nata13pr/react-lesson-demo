import {createBrowserRouter} from 'react-router'
import MainLayout from "../layouts/MainLayout.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>},
    {path: '/carts/user/:userId', element: <ProductsPage/>}
])