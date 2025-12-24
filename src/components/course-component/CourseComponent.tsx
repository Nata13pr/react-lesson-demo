import type {FC} from "react";
import './courseComponent.css'
import type {ICoursesProps} from "../../models/coursesAndDurationArray-model.ts";

const CourseComponent: FC<ICoursesProps> = ({course}) => {
    return (
        <>
            <li>
                {course.title} {course.monthDuration}
            </li>
        </>
    )
}
export default CourseComponent