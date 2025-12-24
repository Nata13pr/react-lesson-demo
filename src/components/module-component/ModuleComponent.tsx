import type {IcourseModuleProps} from "../../models/ICourses.ts";
import type {FC} from "react";

const ModuleComponent: FC<IcourseModuleProps> = ({courseModule}) => {
    return (
        <li className='border-4 border-double m-[10px] pr-[5px] '>{courseModule}</li>
    )
}
export default ModuleComponent