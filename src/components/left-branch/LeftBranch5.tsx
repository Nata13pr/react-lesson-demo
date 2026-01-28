import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftBranch5 = () => {
    const {color} = useContext(MyContext);
    return (
        <div style={{background:color,marginBottom:'20px'}}>
            LeftBranch5
        </div>
    )
}
export default LeftBranch5