import {coursesAndDurationArray} from '../../models/coursesAndDurationArray-model.ts'
import type {FC} from "react";
import './CoursesComponent.css'
import CourseComponent from "../course-component/CourseComponent.tsx";


const CoursesComponent: FC = () => {

    return (
        <>
            <ul>
                {coursesAndDurationArray.map((course, index: number) => {
                        return <CourseComponent course={course} key={index}/>
                    }
                )}
            </ul>

        </>
    )
}

export default CoursesComponent
