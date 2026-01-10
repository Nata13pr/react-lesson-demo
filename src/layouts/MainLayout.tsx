import {Outlet} from "react-router";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <>
            <MenuComponent/>
            <Outlet/>
        </>
    )
}
export default MainLayout;