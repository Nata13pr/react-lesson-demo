import "./FormComponent.css";
import {useForm} from "react-hook-form";
import type ILogin from "../../models/ILogin.ts";
import {login} from "../../services/api.service.ts";
import {useState} from "react";
import {ERROR_MESSAGES} from "../../constants/errors.ts";
import {useNavigate} from "react-router";

const FormComponent = () => {
    const [serverError, setServerError] = useState<string | null>(null);
    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm<ILogin>({
        mode: 'all',
    });
    const navigate = useNavigate();
    const customHandler = async (formDataProps: ILogin) => {
        setServerError(null);
        try {
            await login(formDataProps);
            reset()
            navigate("/menu");
        } catch (error: any) {
            console.error('Login error:', error);
            let message = ERROR_MESSAGES.UNKNOWN;
            if (error.response) {
                const status = error.response.status;
                if (status === 400) message = ERROR_MESSAGES.USER_NOT_FOUND;
                else if (status === 401) message = ERROR_MESSAGES.UNAUTHORIZED;
                else if (status === 403) message = ERROR_MESSAGES.FORBIDDEN;
                else if (status === 404) message = ERROR_MESSAGES.NOT_FOUND;
                else if (status >= 500) message = ERROR_MESSAGES.SERVER_ERROR;
            } else if (error.request) {
                message = ERROR_MESSAGES.NETWORK_ERROR;
            }
            setServerError(message);
        }
    }

    return (
        <div>
            {serverError && (
                <div className='error'>
                    <span>⚠️</span> {serverError}
                </div>
            )}
            <form onSubmit={handleSubmit(customHandler)}>
                <div>
                    <label>
                        <input type="text" {...register("username")}/>
                        {errors.username && <div>{errors.username.message}</div>}
                    </label>
                </div>
                <div>
                    <label>
                        <input type="password" {...register("password")}/>
                        {errors.password && <div>{errors.password.message}</div>}
                    </label>
                </div>
                <button disabled={!isValid}>Log in</button>
            </form>
        </div>
    )
}
export default FormComponent;