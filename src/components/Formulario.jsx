import { useRef } from "react";
import { useToDos } from "../contexts/useToDos";

export const Formulario = () => {
  const textElementRef = useRef();
  const {addTodo} = useToDos();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(textElementRef.current.value);
    textElementRef.current.value = "";
  };

  return (
    <div className="mb-5 p-4 bg-secondary-subtle bg-gradient rounded">
      <h5>Adicionar tarefa</h5>
      <form class="input-group mb-3" addTodo={handleSubmit}>
        <span class="input-group-text" id="campo-adicionar-tarefa">
          Texto da tarefa:
        </span>
        <input
          ref={textElementRef}
          type="text"
          class="form-control"
          aria-label="Adicionar tarefa"
          aria-describedby="campo-adicionar-tarefa"
        />
        <button
          class="btn btn-outline-primary bg-light"
          type="submit"
          id="button-addon2"
        >
          Adicionar tarefa
        </button>
      </form>
    </div>
  );
};
