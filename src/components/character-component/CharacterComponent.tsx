import {type ISimpsonProps} from "../../models/ICharacter.ts";

const CharacterComponent = ({simpson, children}: ISimpsonProps) => {
    return (
        <li className={"bg-[lightgrey]"}>
            <h2 className="uppercase underline decoration-dotted text-2xl ">{simpson.name}-{simpson.surname}.Вік-{simpson.age}</h2>
            <img src={simpson.photo} alt={simpson.name}/>
            <p className={"border-b-4 border-indigo-500"}>{children}</p>
        </li>
    )
}
export default CharacterComponent;