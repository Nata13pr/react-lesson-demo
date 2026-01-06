import type {IUserJsoplaceholder} from "../../../models/jsonplaceholder-user-model/IUserJsoplaceholder.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUserJsoplaceholder
}

const UserJsonplaceholderComponent: FC<UserPropsType> = ({user}) => {
    return (
        <li>
            <header>
                <h1>{user.name}</h1>
                <p>Нікнейм: {user.username}</p>
                <p>ID: {user.id}</p>
            </header>

            <section>
                <h2>Контактна інформація</h2>
                <p>Email: {user.email}</p>
                <p>Телефон: {user.phone}</p>
                <p>Сайт: {user.website}</p>
            </section>

            <section>
                <h2>Адреса</h2>
                <p>Вулиця: {user.address.street}</p>
                <p>Апартаменти: {user.address.suite}</p>
                <p>Місто: {user.address.city}</p>
                <p>Поштовий індекс: {user.address.zipcode}</p>
                <div>
                    <h3>Географічні координати</h3>
                    <p>Широта (lat): {user.address.geo.lat}</p>
                    <p>Довгота (lng): {user.address.geo.lng}</p>
                </div>
            </section>

            <section>
                <h2>Компанія</h2>
                <p>Назва: {user.company.name}</p>
                <p>Слоган: {user.company.catchPhrase}</p>
                <p>Сфера діяльності: {user.company.bs}</p>
            </section>
        </li>
    )
}

export default UserJsonplaceholderComponent;