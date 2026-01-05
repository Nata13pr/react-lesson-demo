import {Link} from 'react-router'
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <ul>
            <li>
                <Link to={'users'}>users</Link>
            </li>
            <li>
                <Link to={'posts'}>posts</Link>
            </li>
            <li>
                <Link to={'comments'}>comments</Link>
            </li>
        </ul>
    )
}
export default MenuComponent;