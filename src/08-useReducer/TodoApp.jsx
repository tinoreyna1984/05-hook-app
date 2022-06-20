import React from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
  const { todos, handleAddTodo, onDeleteTodo, onToggleTodo } = useTodos(todoReducer);

  const pendientes = todos.filter((todo) => !todo.done);
  
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <h4>Total: {todos.length}</h4>
      <h4>Pendientes: {pendientes.length}</h4>
      <hr />
      <div className="row">
        <div className="col-7">
          < TodoList todos={todos} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar Tarea</h4>
          <hr />
          < TodoForm addTodoFunction={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
