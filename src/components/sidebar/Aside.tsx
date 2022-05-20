import AsideButton from "./AsideButton";
import { asideButtonsNames } from "../../../data";
import { useState } from "react";

const Aside = () => {
  const [buttons, setButtons] = useState(asideButtonsNames);
  return (
    <aside className="bg-white row-span-full flex flex-col p-2 border-[1px] border-gray-300 rounded-md">
      {buttons.map((name) => {
        return <AsideButton key={name} name={name} />;
      })}
    </aside>
  );
};

export default Aside;
