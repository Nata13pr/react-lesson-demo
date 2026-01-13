import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CarCreatePage from "../pages/CarCreatePage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/post', element: <CarCreatePage/>}
        ]
    }
])