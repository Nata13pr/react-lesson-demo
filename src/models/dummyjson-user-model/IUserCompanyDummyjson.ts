import type {IUserAddressDummyjson} from "./IUserAddressDummyjson.ts";

export interface IUserCompanyDummyjson {
    department: string,
    name: string,
    title: string,
    address: IUserAddressDummyjson,
}