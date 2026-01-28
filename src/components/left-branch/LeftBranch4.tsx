import LeftBranch5 from "./LeftBranch5.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftBranch4 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            LeftBranch4
            <LeftBranch5/>
        </div>
    )
}
export default LeftBranch4