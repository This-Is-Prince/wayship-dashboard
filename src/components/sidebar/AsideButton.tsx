import { FC } from "react";
import { AsideButtonProps } from "../../../types";
import GetAsideButtonIcon from "./GetAsideButtonIcon";

const AsideButton: FC<AsideButtonProps> = ({ name }) => {
  return (
    <article className="flex items-center border border-black p-2">
      <button className="text-4xl">
        <GetAsideButtonIcon name={name} />
      </button>
      <span className="hidden">{name}</span>
    </article>
  );
};

export default AsideButton;
