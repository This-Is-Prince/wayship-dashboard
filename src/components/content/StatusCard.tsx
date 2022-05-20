import { RiShip2Fill } from "react-icons/ri";

const StatusCard = () => {
  return (
    <section className="rounded-md border-gray-300 border-[1px] px-6 py-4 flex flex-col  justify-between">
      <article className="flex justify-between items-center">
        <span className="text-2xl text-red-400">
          <RiShip2Fill />
        </span>
        <span className="font-bold">SGSIN-NOOSL</span>
      </article>
      <article className="text-gray-700">
        <p className="font-bold ">Statement of Facts</p>
        <p className="text-xs font-bold text-gray-500 -mt-1">Current Status</p>
        <p className="font-bold text-gray-400 mt-2">Cargo First Lift</p>
      </article>
      <article className="bg-gray-300 h-[1px]"></article>
      <article className="grid grid-cols-2 text-sm font-bold text-gray-400">
        <div>
          <p className="text-gray-600">Next Port Cell</p>
          <p>INVTZ1</p>
        </div>
        <div>
          <p className="text-gray-600">ETA</p>
          <p>Nov 27, 1450 UTC</p>
        </div>
      </article>
    </section>
  );
};

export default StatusCard;
