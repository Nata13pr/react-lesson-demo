import PostsComponent from "../components/posts-component/PostsComponent.tsx";
import {Outlet} from 'react-router'

const PostsPage = () => {
    return (
        <>
            <PostsComponent/>
            <Outlet/>
        </>
    )
}
export default PostsPage;