import {Link} from "react-router";
import './Menu.css'

const Menu = () => {
    return (
        <ul  className="text-3xl font-bold underline">
            <li>
                <Link to={'/users'}>users</Link>
            </li>
            <li>
                <Link to={'/posts'}>posts</Link>
            </li>
            <li>
                <Link to={'/comments'}>comments</Link>
            </li>
            <li>
                <Link to={'/products'}>products</Link>
            </li>
        </ul>
    )
}
export default Menu;