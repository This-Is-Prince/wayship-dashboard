import NoticeBoard from "../notice/NoticeBoard";
import OfficerCard from "../OfficerCard";
import StatusCard from "../StatusCard";
import TodosBoard from "../todos/TodosBoard";

const Home = () => {
  return (
    <section className="h-full grid md:grid-cols-[auto,_1fr,_auto] gap-2 md:grid-rows-[auto,_1fr]">
      <OfficerCard />
      <NoticeBoard />
      <TodosBoard />
      <StatusCard />
    </section>
  );
};

export default Home;
