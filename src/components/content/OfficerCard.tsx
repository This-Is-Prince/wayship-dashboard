import { MdWavingHand } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";

const OfficerCard = () => {
  return (
    <section className="rounded-md border-gray-300 border-[1px] p-6 flex flex-col gap-y-7">
      <article className="flex justify-between text-2xl">
        <span className="text-yellow-500">
          <MdWavingHand />
        </span>
        <span className="text-violet-500">
          <AiFillTags />
        </span>
      </article>
      <article className="flex flex-col gap-y-1">
        <p className="text-sm font-semibold text-gray-500">Third Officer</p>
        <h1 className="text-3xl font-bold max-w-[150px]">Niranjan Pawar</h1>
        <span className="text-xs font-semibold text-gray-500">
          Crew ID 86556
        </span>
      </article>
      <article className="bg-gray-300 h-[1px]"></article>
      <article className="text-gray-400">
        <p className="font-bold text-black">My Last Activity</p>
        <p className="mt-2">Submitted the Deck Log for</p>
        <p>
          <span className="text-gray-500 font-bold">1200-1600 Watch</span>{" "}
          <span>at 08:16 UTC</span>
        </p>
      </article>
    </section>
  );
};

export default OfficerCard;
