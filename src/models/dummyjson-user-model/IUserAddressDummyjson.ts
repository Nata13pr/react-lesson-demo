import type {IUserCoordinatesDummyjson} from "./IUserCoordinatesDummyjson.ts";

export interface IUserAddressDummyjson {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: IUserCoordinatesDummyjson,
    country: string,
}