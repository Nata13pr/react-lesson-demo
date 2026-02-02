import { createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../../models/IComment.ts";
import type {CommentSliceType} from "./commentTypes.ts";
import {loadComments} from "./commentThunks.ts";

const initialState: CommentSliceType = {
    comments: [],
    loadState: false
};

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(state);
                console.log(action)
            })
            .addMatcher(isFulfilled(loadComments), (state) => {
                state.loadState = true
            })
            .addMatcher(isRejected(loadComments), (state) => {
                console.log(state);
            })
})

export const commentSliceActions = {
    ...commentSlice.actions, loadComments
}