import type {IUser} from "../../../models/IUser.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserSliceType} from "./userTypes.ts";
import {loadUser, loadUsers} from "./userThunks.ts";


const initialState: UserSliceType = {
    users: [],
    user: null
};


export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action)
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            })
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers,loadUser
}