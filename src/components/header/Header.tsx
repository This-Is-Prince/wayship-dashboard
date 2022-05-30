import { GiCargoShip } from "react-icons/gi";
import { TiPower } from "react-icons/ti";

const Header = () => {
  return (
    <header className="p-3 border-[1px] col-span-full border-gray-300 rounded-md flex justify-between items-center md:col-span-1">
      <section className="flex gap-x-3 items-center text-gray-600">
        <span className="text-3xl">
          <GiCargoShip />
        </span>
        <article>
          <p className="text-sm font-bold">Demo Vessel</p>
          <p className="text-xs font-semibold text-gray-400">
            16 Crewmates - 09 Active
          </p>
        </article>
      </section>
      <section className="flex gap-x-5 items-center">
        <p className="text-gray-400 border-2 border-gray-300 rounded-xl text-xs px-4 py-2 font-bold">
          GMT +09:00
        </p>
        <span className="rounded-full bg-blue-200 p-1 text-3xl">
          <TiPower />
        </span>
      </section>
    </header>
  );
};

export default Header;
