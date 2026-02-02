import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {commentSliceActions} from "../redux/slices/commentSlice/commentSlice.ts";
import CommentsComponent from "../components/comments-component/CommentsComponent.tsx";

export const CommentsPage = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (comments.length === 0) dispatch(commentSliceActions.loadComments());
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
            <Outlet/>
        </div>
    )
}

