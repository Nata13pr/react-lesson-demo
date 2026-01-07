import type {IUser} from "../models/user-model/IUser.ts";

const endpointUser = import.meta.env.VITE_API_BASE_URL_DUMMYJSON + '/users';

export const loadUsers = async (): Promise<IUser[]> => {
    const response = await fetch(endpointUser)
        .then(res => res.json());
    return response.users;
}

