import { BiLinkAlt } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FC } from "react";

const ImpNoticeCard: FC<{ title: string; desc: string; seen: number }> = ({
  desc,
  seen,
  title,
}) => {
  return (
    <article className="bg-yellow-50 rounded-md p-5 flex flex-col gap-y-2">
      <p className="flex justify-between items-center">
        <span className="text-red-400 text-xs font-bold">Important Notice</span>
        <span className="text-gray-500 text-xl">
          <BiLinkAlt />
        </span>
      </p>
      <p className="font-bold text-gray-600">{title}</p>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-x-2 text-gray-400">
          <span>
            <AiOutlineEye />
          </span>
          <span className="text-gray-900 text-sm">{seen}</span>
        </p>
        <button className="rounded-3xl bg-red-600 text-white py-1 px-6 text-xs font-bold tracking-widest">
          READ
        </button>
      </div>
    </article>
  );
};

export default ImpNoticeCard;
