import './MenuComponent.css'
import {Link} from "react-router";

const MenuComponent = () => {
    return (
        <ul className='menu'>
            <li>
                <Link to={'users'}>Users</Link>
            </li>
            <li>
                <Link to={'posts'}>Posts</Link>
            </li>
            <li>
                <Link to={'comments'}>Comments</Link>
            </li>
        </ul>
    )
}
export default MenuComponent