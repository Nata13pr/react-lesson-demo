import "./CommentsComponent.css"
import {Link} from 'react-router'

const CommentsComponent = () => {
    return (
        <ul>
            <li>
                <Link to={'jsonplaceholder'}>jsonplaceholder</Link>
            </li>
        </ul>
    )
}
export default CommentsComponent