import "./MenuComponent.css";
import {Link} from 'react-router'

const MenuComponent = () => {
    return (
        <nav className="main-menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to={'cars'} className="menu-link">Cars</Link>
                </li>
                <li className="menu-item">
                    <Link to={'cars/post'} className="menu-link">Create a car</Link>
                </li>
            </ul>
        </nav>
    )
}
export default MenuComponent