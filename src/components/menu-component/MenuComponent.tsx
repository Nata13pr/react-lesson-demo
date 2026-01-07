import {Link} from 'react-router'
import "./MenuComponent.css"

const MenuComponent=()=>{
    return (
        <ul>
            <li>
                <Link to={'users'}>Users</Link>
            </li>
            <li>
                <Link to={'posts'}>Posts</Link>
            </li>
        </ul>
    )
}
export default MenuComponent