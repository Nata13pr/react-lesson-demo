import LeftBranch3 from "./LeftBranch3.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftBranch2 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            LeftBranch2
            <LeftBranch3/>
        </div>
    )
}
export default LeftBranch2