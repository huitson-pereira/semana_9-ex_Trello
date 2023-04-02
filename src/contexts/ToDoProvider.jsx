import { createContext } from "react";


export const todoContext = createContext()

export const ToDoProvider = ({children}) => {

    return (
        <todoContext.Provider value={}>
                {children}
        </todoContext.Provider>
    )
}