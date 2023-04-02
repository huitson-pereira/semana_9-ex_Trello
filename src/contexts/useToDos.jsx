import { useContext } from "react";

export const useToDos = () => {
    const context = useContext(todosContext);
  
    return context;
  };