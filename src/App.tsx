import './App.css'
import type {FC} from "react";

export let coursesTitleArray: string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
const App: FC = () => {

    return (
        <>
            <ul>{
                coursesTitleArray.map((item, index) => <li key={index}
                                                           className="text-gray-700 dark:text-gray-400 underline decoration-pink-500">{item}</li>)
            }
            </ul>
        </>
    )
}

export default App
