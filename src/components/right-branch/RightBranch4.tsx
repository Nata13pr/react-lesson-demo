import RightBranch5 from "./RightBranch5.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightBranch4 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color}}>
            RightBranch4
            <RightBranch5/>
        </div>
    )
}
export default RightBranch4