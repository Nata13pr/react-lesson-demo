import {Outlet} from 'react-router'
import UsersPage from "../pages/UsersPage.tsx";

const MainLayout = () => {
    return (
        <>
            <UsersPage/>
            <Outlet/>
        </>

    )
}
export default MainLayout