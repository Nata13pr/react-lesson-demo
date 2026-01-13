import axios from 'axios';
import {baseUrl} from "../constants/urls.ts";
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'},
})

export const getAllCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    return data;
}
export const createCar = async (car: ICar) => {
   await axiosInstance.post('/cars', car);
}
