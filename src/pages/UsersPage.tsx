import UsersComponent from "../components/users-component/UsersComponent.tsx";
import {Outlet} from 'react-router'

const UsersPage = () => {
    return (
        <>
            <UsersComponent/>
            <Outlet/>
        </>
    )
}
export default UsersPage;