import type {IUser} from "./user-model/IUser.ts";

export interface IUserReqResInResponse {
    total: number,
    skip: number,
    limit: number,
    users: IUser[]
}