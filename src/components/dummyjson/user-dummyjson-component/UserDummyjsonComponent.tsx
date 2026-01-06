import type {IUserDummyjson} from "../../../models/dummyjson-user-model/IUserDummyjson.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUserDummyjson
}

const UserDummyjsonComponent: FC<UserPropsType> = ({user}) => {
    return (
        <li>
            <h1>{user.firstName} {user.lastName}</h1>
            <p>ID: {user.id}</p>
            <p>Maiden Name: {user.maidenName}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Blood Group: {user.bloodGroup}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
            <p>Eye Color: {user.eyeColor}</p>

            <h3>Hair</h3>
            <p>Color: {user.hair.color}</p>
            <p>Type: {user.hair.type}</p>

            <h3>Address</h3>
            <p>Address: {user.address.address}</p>
            <p>City: {user.address.city}</p>
            <p>State: {user.address.state}</p>
            <p>State Code: {user.address.stateCode}</p>
            <p>Postal Code: {user.address.postalCode}</p>
            <p>Country: {user.address.country}</p>
            <p>Lat: {user.address.coordinates.lat}</p>
            <p>Lng: {user.address.coordinates.lng}</p>

            <h3>Bank</h3>
            <p>Card Expire: {user.bank.cardExpire}</p>
            <p>Card Number: {user.bank.cardNumber}</p>
            <p>Card Type: {user.bank.cardType}</p>
            <p>Currency: {user.bank.currency}</p>
            <p>IBAN: {user.bank.iban}</p>

            <h3>Company</h3>
            <p>Name: {user.company.name}</p>
            <p>Title: {user.company.title}</p>
            <p>Department: {user.company.department}</p>
            <p>Company Address: {user.company.address.address}</p>
            <p>Company City: {user.company.address.city}</p>

            <h3>Crypto</h3>
            <p>Coin: {user.crypto.coin}</p>
            <p>Wallet: {user.crypto.wallet}</p>
            <p>Network: {user.crypto.network}</p>

            <h3>Other</h3>
            <p>IP: {user.ip}</p>
            <p>MAC: {user.macAddress}</p>
            <p>University: {user.university}</p>
            <p>EIN: {user.ein}</p>
            <p>SSN: {user.ssn}</p>
            <p>User Agent: {user.userAgent}</p>
            <p>Role: {user.role}</p>
            <img src={user.image} alt="user"/></li>
    )
}
export default UserDummyjsonComponent