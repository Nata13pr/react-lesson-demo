import './App.css'
import TodosComponent from "./components/todos/todos-component/TodosComponent.tsx";
import PostsComponent from "./components/posts/posts-component/PostsComponent.tsx";
import CommentsComponent from "./components/comments/comments-component/CommentsComponent.tsx";

function App() {

    return (
        <div>
            <TodosComponent/>
            <PostsComponent/>
            <CommentsComponent/>
        </div>
    )
}

export default App
