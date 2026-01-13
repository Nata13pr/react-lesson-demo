import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../../validators/car.validator.ts";
import './FormComponent.css'
import {createCar} from "../../services/car.service.ts";

interface IFormProps {
    brand: string,
    price: number,
    year: number
}

const FormComponent = () => {
    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })
    const customHandler = async (formDataProps: IFormProps) => {
        try {
            await createCar(formDataProps)
            reset()
        } catch (error) {
            console.error('Помилка при створенні:', error);
        }
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(customHandler)}>
                <div className="form-group">
                    <label>
                        <input className={`form-input ${errors.brand ? 'error' : ''}`}
                               type="text" {...register("brand")}/>
                        {errors.brand && <div>{errors.brand.message}</div>}
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input className={`form-input ${errors.brand ? 'error' : ''}`}
                               type="number" {...register("price")}/>
                        {errors.price && <div>{errors.price.message}</div>}
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input className={`form-input ${errors.brand ? 'error' : ''}`}
                               type="number" {...register("year")}/>
                        {errors.year && <div>{errors.year.message}</div>}
                    </label>
                </div>

                <button className="submit-button" disabled={!isValid}>Create a car</button>
            </form>
        </div>
    )
}
export default FormComponent