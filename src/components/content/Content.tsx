import NoticeBoard from "./notice/NoticeBoard";
import OfficerCard from "./OfficerCard";
import StatusCard from "./StatusCard";
import TodosBoard from "./todos/TodosBoard";

const Content = () => {
  return (
    <main className="grid grid-cols-[auto,_1fr,_auto] gap-2 grid-rows-[auto,_1fr]">
      <OfficerCard />
      <NoticeBoard />
      <TodosBoard />
      <StatusCard />
    </main>
  );
};

export default Content;
