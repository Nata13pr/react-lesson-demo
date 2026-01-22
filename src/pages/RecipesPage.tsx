import {useEffect, useState} from "react";
import {refresh} from "../services/auth.service.ts";
import {useSearchParams} from "react-router";
import PaginationPage from "./PaginationPage.tsx";
import RecipesComponent from "../components/recipes-component/RecipesComponent.tsx";
import type {IRecipe} from "../models/IRecipe.ts";
import {loadRecipes} from "../services/recipes.service.ts";

const RecipesPage = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        loadRecipes(currentPage)
            .then(({recipes, total}) => {
                setRecipes(recipes)
                setTotal(total)
            })
            .catch(() => {
                refresh()
                    .then(() => loadRecipes(currentPage))
                    .then(({recipes, total}) => {
                        setRecipes(recipes)
                        setTotal(total)
                    })
            });
    }, [searchParams])
    return (
        <>
            <RecipesComponent recipes={recipes}/>
            <PaginationPage total={total} limit={5}/>
        </>
    )
}
export default RecipesPage