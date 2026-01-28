import RightBranch4 from "./RightBranch4.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightBranch3 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            RightBranch3
            <RightBranch4/>
        </div>
    )
}
export default RightBranch3