import "./RecipeTagComponent.css"

type RecipeTagPropsType = {
    tag: string
}
export const RecipeTagComponent: FC<RecipeTagPropsType> = ({tag}) => {
    return (
        <span className="tag">{tag}</span>
    )
}
export default RecipeTagComponent