import "./RecipesComponent.css"
import type {FC} from "react";
import type {IRecipe} from "../../models/IRecipe.ts";
import RecipeComponent from "../recipe-component/RecipeComponent.tsx";

type RecipesPropsType = {
    recipes: IRecipe[]
}
const RecipesComponent: FC<RecipesPropsType> = ({recipes}) => {
    return (
        <ul className='recipe'>
            {
                recipes.map(recipe => <RecipeComponent recipe={recipe} key={recipe.id}/>)
            }
        </ul>
    )
}
export default RecipesComponent