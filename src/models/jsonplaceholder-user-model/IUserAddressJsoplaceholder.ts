import type {IUserGeoJsoplaceholder} from "./IUserGeoJsoplaceholder.ts";

export interface IUserAddressJsoplaceholder {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IUserGeoJsoplaceholder
}