import RightBranch3 from "./RightBranch3.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightBranch2 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            RightBranch2
            <RightBranch3/>
        </div>
    )
}
export default RightBranch2