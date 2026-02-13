import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadAllUsers, userById} from "../../../services/user.service.ts";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {

        try {
            const users = await loadAllUsers()

            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const loadUser = createAsyncThunk(
    'commentSlice/loadUser',
    async (id: string, thunkAPI) => {

        try {
            const user = await userById(id)

            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)