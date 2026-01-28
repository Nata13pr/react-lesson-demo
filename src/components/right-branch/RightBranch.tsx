import RightBranch1 from "./RightBranch1.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightBranch = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color,marginBottom:'20px'}}>
            RightBranch
            <RightBranch1/>
        </div>
    )
}
export default RightBranch