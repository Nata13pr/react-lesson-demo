import type {ICourseProps} from "../../models/ICourses.ts";
import type {FC} from "react";
import ModuleComponent from "../module-component/ModuleComponent.tsx";

const CourseComponent: FC<ICourseProps> = ({course, children}) => {
    return (
        <li>
            <h2 className='text-2xl '>{course.title}</h2>
            <p>Тривалість в місяцях - {course.monthDuration}</p>
            <p>Тривалість в годинах - {course.hourDuration}</p>
            <ul className=' flex bg-[lightblue] '>
                {children && children.map((courseModule, index) => {
                    return (
                        <ModuleComponent key={index} courseModule={courseModule}/>
                    )
                })
                }
            </ul>
        </li>
    )
}
export default CourseComponent