import LeftBranch4 from "./LeftBranch4.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftBranch3 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            LeftBranch3
            <LeftBranch4/>
        </div>
    )
}
export default LeftBranch3