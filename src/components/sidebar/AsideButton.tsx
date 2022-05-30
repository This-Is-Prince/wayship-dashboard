import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AsideButtonProps } from "../../../types";
import GetAsideButtonIcon from "./GetAsideButtonIcon";

const AsideButton: FC<AsideButtonProps> = ({ name }) => {
  return (
    <NavLink
      to={`${name === "Home" ? "/" : name.toLowerCase()}`}
      className={({ isActive }) => {
        return isActive
          ? `flex-auto py-2 px-4 cursor-pointer flex flex-col gap-y-1 justify-center items-center rounded-md bg-blue-200
      `
          : `flex-auto py-2 px-4 cursor-pointer flex flex-col gap-y-1 justify-center items-center rounded-md
      `;
      }}
    >
      <button className="text-xl md:text-3xl text-gray-600">
        <GetAsideButtonIcon name={name} />
      </button>
      <span className="text-[0.55rem] md:text-sm">{name}</span>
    </NavLink>
  );
};

export default AsideButton;
