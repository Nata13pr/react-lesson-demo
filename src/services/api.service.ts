import axios from 'axios';
import {baseUrl} from "../constants/urls.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retrieveLocalStorage} from "./helpers.ts";


export const axiosInstance = axios.create({ //створила змінну і експортнула,щоб могти використати данну змінну в бідьякій точці кода.axios.create({})-це метод бібліотеки Axios,за допомогою нього створюю новий екземпляр з потрібними мені налаштуваннями.
    baseURL: baseUrl + '/auth',//кожен запит  буде починатись з адреси,яку ми беремо з констант і додаємо рядок 'auth'.
    headers: {'Content-Type': 'application/json'},//вказую серверу,які данні буду надсиласти,в данному випадку у форматі JSON
})

axiosInstance.interceptors.request.use((requestObject) => {//Прошарок,який перехоплює request.RequestObject-це мій запит і тут все зберігається
    if (requestObject.method?.toUpperCase() === "GET") {//якщо метод get,
        requestObject.headers.Authorization = "Bearer " + retrieveLocalStorage<IUserWithTokens>('user').accessToken//то в я вклинююсь і дописую в headers.Authorization строку Bearer,пробіл після нього і дістаю з loсalStorage данні за допомогою хелпера,передавши в нього модель данних і рядок,отримую обєкт в якому шукаю властивість accessToken.В цій властивості є рядок,який додається до слова Bearer+пробіл.
    }
    return requestObject;// повертаю обєкт,щоб далі його передати на сервер,якщо умова підійшла то з доданою ауторизацією,якщо ні то не змінений обєкт.
})
