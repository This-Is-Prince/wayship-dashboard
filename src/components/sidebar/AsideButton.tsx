import { FC } from "react";
import { AsideButtonProps } from "../../../types";
import GetAsideButtonIcon from "./GetAsideButtonIcon";

const AsideButton: FC<AsideButtonProps> = ({ name }) => {
  return (
    <article
      className={`flex-auto px-4 text-gray-600 cursor-pointer flex flex-col gap-y-2 justify-center items-center rounded-md ${
        name === "Home" ? "bg-blue-200" : ""
      }`}
    >
      <button className="text-3xl">
        <GetAsideButtonIcon name={name} />
      </button>
      <span className="text-xs">{name}</span>
    </article>
  );
};

export default AsideButton;
