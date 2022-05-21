import React, { useState } from "react";
import { todosData } from "../../../../data";
import TodoCard from "./TodoCard";

const TodosCard = () => {
  const [todos, setTodos] = useState(todosData);
  return (
    <div className="flex flex-col gap-y-2">
      {todos.map(({ id, by, due, isCompleted, title }) => {
        return (
          <TodoCard
            key={id}
            by={by}
            due={due}
            isCompleted={isCompleted}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default TodosCard;
