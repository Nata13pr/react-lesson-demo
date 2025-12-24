import type {FC} from "react";
import './FamilyComponent.css'
import {simpsons} from "../../models/ICharacter.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";

const FamilyComponent: FC = () => {
    return (
        <>
            <ul>
                {simpsons.map((simpson, index: number) => {
                    return <CharacterComponent key={index} simpson={simpson}>{simpson.info}</CharacterComponent>
                })}
            </ul>
        </>
    )
}
export default FamilyComponent;