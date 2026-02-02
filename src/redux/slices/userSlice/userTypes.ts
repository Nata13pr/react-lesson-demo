import type {IUser} from "../../../models/IUser.ts";

export type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    loadState: boolean;
}
