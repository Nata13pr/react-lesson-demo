import LeftBranch1 from "./LeftBranch1.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftBranch = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            LeftBranch
            <LeftBranch1/>
        </div>
    )
}
export default LeftBranch