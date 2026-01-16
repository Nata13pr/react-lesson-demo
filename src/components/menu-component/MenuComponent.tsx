import "./MenuComponent.css"
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'products'}>Products</Link>
                </li>
                <li>
                    <Link to={'todos'}>Todos</Link>
                </li>
                <li>
                    <Link to={'menu/quotes'}>Quotes</Link>
                </li>
                <li>
                    <Link to={'menu/posts'}>Posts</Link>
                </li>
                <li>
                    <Link to={'menu/carts'}>Carts</Link>
                </li>
                <li>
                    <Link to={'menu/recipes'}>Recipes</Link>
                </li>
                <li>
                    <Link to={'menu/users'}>Users</Link>
                </li>
                <li>
                    <Link to={'menu/comments'}>Comments</Link>
                </li>
            </ul>
        </nav>
    )
}
export default MenuComponent