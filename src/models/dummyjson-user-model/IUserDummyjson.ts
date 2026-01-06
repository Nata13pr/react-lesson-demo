import type {IUserHairDummyjson} from "./IUserHairDummyjson.ts";
import type {IUserAddressDummyjson} from "./IUserAddressDummyjson.ts";
import type {IUserBankDummyjson} from "./IUserBankDummyjson.ts";
import type {IUserCompanyDummyjson} from "./IUserCompanyDummyjson.ts";
import type {IUserCryptoDummyjson} from "./IUserCryptoDummyjson.ts";

export interface IUserDummyjson {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IUserHairDummyjson,
    ip: string,
    address: IUserAddressDummyjson,
    macAddress: string,
    university: string,
    bank: IUserBankDummyjson,
    company: IUserCompanyDummyjson,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: IUserCryptoDummyjson,
    role: string
}