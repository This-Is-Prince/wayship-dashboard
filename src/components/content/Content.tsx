import { FC } from "react";

const Content: FC<{ children: any }> = ({ children }) => {
  return (
    <main className="pb-[4.5rem] col-span-full md:col-span-1 md:pb-0">
      {children}
    </main>
  );
};

export default Content;
