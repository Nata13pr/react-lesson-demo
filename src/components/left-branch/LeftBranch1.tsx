import LeftBranch2 from "./LeftBranch2.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftBranch1 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            LeftBranch1
            <LeftBranch2/>
        </div>
    )
}
export default LeftBranch1