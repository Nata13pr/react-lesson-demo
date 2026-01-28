import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightBranch = () => {
    const {color,changeColor} = useContext(MyContext);

    return (
        <div style={{background:color, marginBottom:'20px'}}>
            RightBranch5
            <button onClick={()=>{
                const nextColor = color === 'grey' ? 'beige' : 'grey';
                changeColor(nextColor)
            }}>Change the theme</button>
        </div>
    )
}
export default RightBranch