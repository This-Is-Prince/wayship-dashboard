import AsideButton from "./AsideButton";
import { asideButtonsNames } from "../../../data";
import { useState } from "react";

const Aside = () => {
  const [buttons, setButtons] = useState(asideButtonsNames);
  return (
    <aside className="bg-white fixed z-20 left-0 right-0 bottom-0  overflow-auto flex p-2 border-[1px] border-gray-300 rounded-md md:row-span-full md:static  md:flex-col">
      {buttons.map((name) => {
        return <AsideButton key={name} name={name} />;
      })}
    </aside>
  );
};

export default Aside;
