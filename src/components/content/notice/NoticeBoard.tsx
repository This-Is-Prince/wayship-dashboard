import { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { impNoticeData, noticeData } from "../../../../data";
import ImpNoticeCard from "./ImpNoticeCard";
import NoticeCard from "./NoticeCard";

const NoticeBoard = () => {
  const [notices, setNotices] = useState(noticeData);
  const [impNotices, setImpNotices] = useState(impNoticeData);
  return (
    <section className="rounded-md border-gray-300 border-[1px] row-span-2 px-6 py-4 flex flex-col gap-y-7 bg-blue-100">
      <header>
        <div className="flex  items-center justify-between text-blue-900 text-xl font-bold">
          <h2>Ahoy Stream</h2>
          <span>
            <BsArrowRepeat />
          </span>
        </div>
        <p className="text-sm text-gray-500 font-semibold">
          Last updated - 4 minutes ago
        </p>
      </header>
      <div className="flex flex-col gap-y-2">
        {impNotices.map(({ desc, id, seen, title }) => {
          return (
            <ImpNoticeCard key={id} desc={desc} seen={seen} title={title} />
          );
        })}
        {notices.map(({ desc, id, person, time }) => {
          return (
            <NoticeCard key={id} desc={desc} person={person} time={time} />
          );
        })}
      </div>
    </section>
  );
};

export default NoticeBoard;
