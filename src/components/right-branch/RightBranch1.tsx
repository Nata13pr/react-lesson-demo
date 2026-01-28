import RightBranch2 from "./RightBranch2.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightBranch1 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            RightBranch1
            <RightBranch2/>
        </div>
    )
}
export default RightBranch1