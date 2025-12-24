import {coursesArray, type ICourseArray} from "../../models/ICourses.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <ul>
            {coursesArray.map((course: ICourseArray, index: number) => {
                return (
                    <CourseComponent key={index} course={course}>
                        {course.modules}
                    </CourseComponent>
                )
            })}
        </ul>
    )
}
export default CoursesComponent