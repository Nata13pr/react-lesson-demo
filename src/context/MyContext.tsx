import {createContext} from "react";

type MyContextType = {
    color: string,
    changeColor: (color: string) => void
}

export const init = {
    color: 'beige',
    changeColor: (color: string) => {
        console.log(color)
    }
}

export const MyContext = createContext<MyContextType>(init)