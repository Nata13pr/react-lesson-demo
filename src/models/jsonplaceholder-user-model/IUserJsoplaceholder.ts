import type {IUserCompanyJsoplaceholder} from "./IUserCompanyJsoplaceholder.ts";
import type {IUserAddressJsoplaceholder} from "./IUserAddressJsoplaceholder.ts";

export interface IUserJsoplaceholder {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddressJsoplaceholder,
    phone: string,
    website: string,
    company: IUserCompanyJsoplaceholder
}