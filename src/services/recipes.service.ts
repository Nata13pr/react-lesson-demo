import type {IResponseType} from "../models/IResponseType.ts";
import {axiosInstance} from "./api.service.ts";
import type {IRecipe} from "../models/IRecipe.ts";

export const loadRecipes = async (page: string): Promise<IResponseType<IRecipe, 'recipes'>> => {
    const limit = 5;
    const skip = limit * (Number(page)) - limit;
    const {data} = await axiosInstance.get<IResponseType<IRecipe, 'recipes'>>('/recipes' + `?limit=${limit}` + '&skip=' + skip);
    return data;
}