import NoticeBoard from "./notice/NoticeBoard";
import OfficerCard from "./OfficerCard";
import StatusCard from "./StatusCard";
import TodosBoard from "./todos/TodosBoard";

const Content = () => {
  return (
    <main className="pb-[4.5rem] col-span-full grid md:grid-cols-[auto,_1fr,_auto] gap-2 grid-rows-[auto,_1fr] md:col-span-1 md:pb-0">
      <OfficerCard />
      <NoticeBoard />
      <TodosBoard />
      <StatusCard />
    </main>
  );
};

export default Content;
