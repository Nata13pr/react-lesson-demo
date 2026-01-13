import CarsComponent from "../components/cars-component/CarsComponent.tsx";
import {useEffect, useState} from "react";
import type {ICar} from "../models/ICar.ts";
import {getAllCars} from "../services/car.service.ts";

const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getAllCars()
            .then(value => setCars(value))
    }, []);
    return (
        <>
            <CarsComponent cars={cars}/>
        </>
    )
}
export default CarsPage