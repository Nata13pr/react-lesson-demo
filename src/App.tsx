import CommentsComponent from "./components/comments-component/CommentsComponent.tsx";
import PostsComponent from "./components/posts-component/PostsComponent.tsx";
import TodosComponent from "./components/todos-component/TodosComponent.tsx";

const App = () => {
    return (
        <>
            <CommentsComponent/>
            <PostsComponent/>
            <TodosComponent/>
        </>
    )
}
export default App;