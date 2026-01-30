import type {IPost} from "../../../models/IPost.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";

type PostSliceType = {
    posts: IPost[],
    post: IPost | null,
    loadState: boolean,
}

const initialState: PostSliceType = {
    posts: [],
    post: null,
    loadState: false
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {

        try {
            const posts = await fetch('https:jsonplaceholder.typicode.com/posts')
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

const loadPost = createAsyncThunk(
    'postSlice/loadPost',
    async (id: string, thunkAPI) => {
        try {
            const post = await fetch('https://jsonplaceholder.typicode.com/posts' + id)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(post)
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
            .addMatcher(isFulfilled(loadPost, loadPosts), (state) => {
                state.loadState = true
            })
            .addMatcher(isRejected(loadPost, loadPosts), (state) => {
                console.log(state)
            })
})

export const postSliceAction = {
    ...postSlice.actions, loadPosts, loadPost
}