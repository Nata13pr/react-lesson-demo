import CommentsComponent from "../components/comments-component/CommentsComponent.tsx";
import {Outlet} from 'react-router'

const CommentsPage = () => {
    return (
        <>
            <CommentsComponent/>
            <Outlet/>
        </>
    )
}
export default CommentsPage;