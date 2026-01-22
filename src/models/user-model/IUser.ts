import type {IUserHair} from "./IUserHair.ts";
import type {IUserAddress} from "./IUserAddress.ts";
import type {IUserBank} from "./IUserBank.ts";
import type {IUserCompany} from "./IUserCompany.ts";
import type {IUserCrypto} from "./IUserCrypto.ts";

export interface IUser {
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
    hair: IUserHair,
    ip: string,
    address: IUserAddress,
    macAddress: string,
    university: string,
    bank: IUserBank,
    company: IUserCompany,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: IUserCrypto,
    role: string
}