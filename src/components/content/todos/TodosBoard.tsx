import React from "react";
import { BsCloudSun } from "react-icons/bs";
import TodosCard from "./TodosCard";

const TodosBoard = () => {
  return (
    <section className="rounded-md border-gray-300 border-[1px] row-span-2 px-6 py-4 flex flex-col gap-y-7">
      <header>
        <div className="flex  items-center justify-between text-blue-900 text-xl font-bold">
          <h2>My Day</h2>
          <span className="text-yellow-500">
            <BsCloudSun />
          </span>
        </div>
        <p className="text-xs text-gray-500 font-semibold">Tuesday, March 2</p>
      </header>
      <TodosCard />
    </section>
  );
};

export default TodosBoard;
