import React, { FC } from "react";

const TodoCard: FC<{
  title: string;
  by: string;
  due: string;
  isCompleted: boolean;
}> = ({ by, due, isCompleted, title }) => {
  return (
    <article className="py-2 px-4 bg-gray-50 rounded-md flex items-center gap-x-4">
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          className="bg-white border-2 border-gray-400 text-green-500 rounded-sm p-[7px] cursor-pointer"
        />
      </div>
      <div>
        <p
          className={`${
            isCompleted ? "line-through" : ""
          } font-bold text-[14px] text-gray-700`}
        >
          {title}
        </p>
        <p className="text-[10px] text-gray-400 font-bold">
          Assigned by {by} {due !== "" ? `| Due in ${due}` : ""}
        </p>
      </div>
    </article>
  );
};

export default TodoCard;
