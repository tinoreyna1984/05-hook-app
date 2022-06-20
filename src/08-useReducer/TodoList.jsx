import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onToggleTodo, onDeleteTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </>
  );
};
