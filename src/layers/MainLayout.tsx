import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import {Outlet} from 'react-router'

const MainLayout = () => {
    return (
        <>
            <MenuComponent/>
            <Outlet/>
        </>
    )
}
export default MainLayout;