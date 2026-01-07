import type {IUserAddress} from "./IUserAddress.ts";

export interface IUserCompany {
    department: string,
    name: string,
    title: string,
    address: IUserAddress,
}