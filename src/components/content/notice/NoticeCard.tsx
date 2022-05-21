import React, { FC } from "react";

const NoticeCard: FC<{ person: string; desc: string; time: string }> = ({
  person,
  desc,
  time,
}) => {
  return (
    <article className="bg-white rounded-md p-5  flex flex-col gap-y-5 font-bold text-gray-700">
      <p>
        <span>{person}</span>{" "}
        <span className="text-gray-500 font-medium">{desc}</span>
      </p>
      <p className="text-right text-xs">{time}</p>
    </article>
  );
};

export default NoticeCard;
