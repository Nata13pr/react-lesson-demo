import type {IProduct} from "../models/IProduct.ts";
import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";

export const loadProducts = async (page: string): Promise<IResponseType<IProduct, 'products'>> => {//асинхронна функція в параметри,якої надходить рядок
    const limit = 5;//створюю змінну,присвоюю їй значення
    const skip = limit * (Number(page)) - limit;//присвоюю значенню скіп,значення яке повинно пропуститись при пагінаціїї
    const {data} = await axiosInstance.get<IResponseType<IProduct, 'products'>>('/products' + `?limit=${limit}` + '&skip=' + skip);//Await змшує чекати відповідь від сервера.Гетовий метод,в дужках продовження шляху на який треба робити запит.Ліміт і скіп змінюються динамічно.Приходить від сервера великий обєкт,одразу деструктуризую і вибираю date в якій є потрібні мені данні.
    return data;//повертаю данні
}