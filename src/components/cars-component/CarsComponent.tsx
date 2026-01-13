import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";
import CarComponent from "../car-component/CarComponent.tsx";

type CarsPropsType = {
    cars: ICar[]
}

const CarsComponent: FC<CarsPropsType> = ({cars}) => {
    return (
        <ul className="cars-list">
            {
                cars.map(car => <CarComponent car={car} key={car.id}/>)
            }
        </ul>
    )
}
export default CarsComponent