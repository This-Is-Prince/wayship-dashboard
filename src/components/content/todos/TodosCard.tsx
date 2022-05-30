import { useState } from "react";
import { todosData } from "../../../../data";
import { HandleTodoComplete } from "../../../../types";
import TodoCard from "./TodoCard";

const TodosCard = () => {
  const [todos, setTodos] = useState(todosData);
  const handleTodoComplete: HandleTodoComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return { ...todo };
        }
      });
    });
  };
  return (
    <div className="flex flex-col gap-y-2">
      {todos.map(({ id, by, due, isCompleted, title }) => {
        return (
          <TodoCard
            id={id}
            handleOnChange={handleTodoComplete}
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
