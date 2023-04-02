import { useContext } from "react";
import { TodoContext } from "./ToDoProvider";

export const useToDos = () => {
    const context = useContext(TodoContext);
  
    return context;
  };