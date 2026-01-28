import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";
import RightBranch from "./components/right-branch/RightBranch.tsx";
import LeftBranch from "./components/left-branch/LeftBranch.tsx";

const App = () => {
    const [color, setColor] = useState<string>('beige')
    return (
        <>
            <MyContext.Provider value={{
                color: color,
                changeColor: (color) => {
                    setColor(color)
                }
            }}>
                <RightBranch/>
                <LeftBranch/>
            </MyContext.Provider>
        </>
    )
}
export default App;