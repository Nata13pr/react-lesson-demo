import "./IngredientComponent.css"
import type {FC} from "react";

type IngredientPropsType = {
    ingredient: string
}
const IngredientComponent: FC<IngredientPropsType> = ({ingredient}) => {
    return (
        <li>{ingredient}</li>
    )
}
export default IngredientComponent;