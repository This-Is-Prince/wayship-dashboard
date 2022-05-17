import AsideButton from "./AsideButton";
import { asideButtonsNames } from "../../../data";
import { useState } from "react";

const Aside = () => {
  const [buttons, setButtons] = useState(asideButtonsNames);
  return (
    <aside className="bg-white flex fixed bottom-0 shadow shadow-black w-screen px-4 py-2 gap-x-12 overflow-x-scroll">
      {buttons.map((name) => {
        return <AsideButton key={name} name={name} />;
      })}
    </aside>
  );
};

export default Aside;
