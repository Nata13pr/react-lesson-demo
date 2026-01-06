import {Link} from "react-router"

const MenuComponent = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={'users/jsonplaceholder'}>Users from Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'users/dummyjson'}>Users from Dummyjson</Link>
                </li>
                <li>
                    <Link to={'posts/jsonplaceholder'}>Posts from Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'posts/dummyjson'}>Posts from Dummyjson</Link>
                </li>
                <li>
                    <Link to={'comments/jsonplaceholder'}>Comments from Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to={'comments/dummyjson'}>Comments from Dummyjson</Link>
                </li>
            </ul>
        </>
    )
}
export default MenuComponent