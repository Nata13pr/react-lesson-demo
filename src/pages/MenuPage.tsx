import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import {Outlet} from "react-router";

const MenuPage = () => {
    return (
        <>
            <MenuComponent/>
            <Outlet/>
        </>
    )
}

export default MenuPage;