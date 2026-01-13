import type {ICar} from "../../models/ICar.ts";
import type {FC} from "react";

type CarPropsType = {
    car: ICar
}

const CarComponent: FC<CarPropsType> = ({car}) => {
    return (
        <li className="car-card">
            <h2 className="car-title">
                <strong>{car.brand}</strong>
            </h2>
            <p className="car-info">
                Price: <span className="car-price">${car.price}</span> <br/>
                Year: <span>{car.year}</span>
            </p>
        </li>
    )
}
export default CarComponent