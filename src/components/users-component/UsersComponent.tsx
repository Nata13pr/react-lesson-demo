import './UsersComponent.css'
import {Link} from 'react-router'

const UsersComponent = () => {
    return (
        <ul>
            <li>
                <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
            </li>
            <li>
                <Link to={'dummyjson'}>dummyjson</Link>
            </li>
        </ul>
    )
}
export default UsersComponent;