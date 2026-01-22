import "./RecipeComponent.css"
import type {FC} from "react";
import type {IRecipe} from "../../models/IRecipe.ts";
import IngredientComponent from "../ingredient-component/IngredientComponent.tsx";
import InstructionComponent from "../instruction-component/InstructionComponent.tsx";
import RecipeTagComponent from "../recipe-tag-component/RecipeTagComponent.tsx";

type CartsPropsType = {
    recipe: IRecipe
}
const RecipeComponent: FC<CartsPropsType> = ({recipe}) => {
    return (
        <li className='recipe'>
            <article className="recipe-card">

                <div className="recipe-image-container">
                    <img src={recipe.image} alt={recipe.name}
                         className="recipe-image"/>
                    <div className="rating-badge">
                        <span className="star-icon">★</span>
                        <span>{recipe.rating}</span>
                        <span className='review-count'>{recipe.reviewCount}</span>
                    </div>
                </div>
                <div className="recipe-content">
                    <span className="cuisine-tag">{recipe.cuisine} • Dinner</span>
                    <h1 className="recipe-title">{recipe.name}</h1>
                    <div className="recipe-stats">
                        <div className="stat-item">
                            <span className="stat-value">{recipe.prepTimeMinutes} хв</span>
                            <span className="stat-label">Підготовка</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{recipe.cookTimeMinutes} хв</span>
                            <span className="stat-label">Готування</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{recipe.caloriesPerServing}</span>
                            <span className="stat-label">Кал/порц</span>
                        </div>
                    </div>

                    <h2 className="section-title">Інгредієнти</h2>
                    <ul className="ingredients-list">
                        {
                            recipe.ingredients.map((ingredient, index) => <IngredientComponent ingredient={ingredient} key={index}/>)
                        }
                    </ul>
                    <h2 className="section-title">Інструкції</h2>
                    <ol className="instructions-list">
                        {
                            recipe.instructions.map((instruction, index) => <InstructionComponent
                                instruction={instruction} key={index}/>)
                        }
                    </ol>
                    <div className="tags-container">
                        {recipe.tags.map((tag, index) => <RecipeTagComponent tag={tag} key={index}/>)}
                    </div>
                </div>
            </article>
        </li>
    )
}
export default RecipeComponent