import { FC } from "react";
import { AsideButtonProps } from "../../../types";
import GetAsideButtonIcon from "./GetAsideButtonIcon";

const AsideButton: FC<AsideButtonProps> = ({ name }) => {
  return (
    <article
      className={`flex-auto py-2 px-4 cursor-pointer flex flex-col gap-y-1 justify-center items-center rounded-md ${
        name === "Home" ? "bg-blue-200" : ""
      }`}
    >
      <button className="text-xl md:text-3xl text-gray-600">
        <GetAsideButtonIcon name={name} />
      </button>
      <span className="text-[0.55rem] md:text-sm">{name}</span>
    </article>
  );
};

export default AsideButton;
