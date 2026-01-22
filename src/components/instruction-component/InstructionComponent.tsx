import "./InstructionComponent.css"
import type {FC} from "react";

type InstructionPropsType = {
    instruction: string
}
const InstructionComponent: FC<InstructionPropsType> = ({instruction}) => {
    return (
        <li>{instruction}</li>
    )
}
export default InstructionComponent;