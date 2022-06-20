import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoForm = ({addTodoFunction}) => {
  const {description, handleInputChange, reset} = useForm({
    description: "",
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
        id: new Date().getTime(),
        description: description,
        done: false,
    };
    addTodoFunction(newTodo);
    reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        onChange={handleInputChange}
        name="description"
        value={description}
        className="form-control"
        type="text"
        placeholder="Agregar tarea"
        autoComplete="off"
      />
      <button type="submit" className="btn btn-dark mt-2">
        Agregar
      </button>
    </form>
  );
};
