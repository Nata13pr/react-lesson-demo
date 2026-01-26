import type ILogin from "../models/ILogin.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {axiosInstance} from "./api.service.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

export const login = async ({username, password, expiresInMins = 1}: ILogin): Promise<IUserWithTokens> => {//експортую  асинхронну функцію,в дужках параметри,які ми одразу деструктуризуємо,витягую з переданого обєкта username, password,якщо  expiresInMins не передано то йому присвоється значення 1
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('login', {//екземпляр класа axiosInstance викликає метод post.login-це шлях-ендпоїнт на сервері куди відправляти данні.У фігурних дужках тіло запита,тобто данні,які я хочу,щоб надійшли до сервера.Await чекає поки прийде відовідь від сервера. Відповідь від сервера приходить у вигляді великого обєкта нам треба на данний момент тільки data ,тому ми одразу деструтуруємо її,
        username,
        password,
        expiresInMins
    })
    localStorage.setItem("user", JSON.stringify(userWithTokens))//створю комірку з назвою-ключем user і зберігаю туди данні,які прийли від сервера про юзера,але ще плюс accessToken і refreshToken.AccessToken-це квиток за допомогою,якого можна отримати закриті данні. RefreshToken-це код за допомогою,якого,я можу відновитись аccessToken.
    return userWithTokens
}

export const refresh = async () => {//експортую асинхронну функцію
    const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user')//витягую обєкт юзера з локального сховища
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {//екземпляр класа axiosInstance викликає постовий метод на ендпоїнт refresh,в тіло запита передаю refreshToken i expiresInMin,Await чекає поки прийде відповідь від сервера.Приходить велтвтй обєкт,деструктуруємо з нього data і одразу з data еструктуруємо  accessToken, refreshToken.
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;//переписую аксесс токен в обєкті
    iUserWithTokens.refreshToken = refreshToken;//ереписує рефреш токен в обєкті
    localStorage.setItem("user", JSON.stringify(iUserWithTokens));//в локал сторадж під ключем user записую нову інформацію,перед записом перетворюю обєкт в рядок.
}