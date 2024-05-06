import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import Ticket from "./components/Ticket";

export default function BusRoutes() {
  return (
    <>
      <Navigation />
      <main className=" relative top-14">
        <div className=" bg-sky-800 text-white ">
          <SearchForm />
        </div>
        <section className=" p-4 flex justify-between">
          <button className=" px-3 py-1 border border-sky-700 text-sky-700">
            99 Mounth
          </button>
          <button className=" px-3 py-1 border border-sky-700 text-sky-700">
            99 Mounth
          </button>
          <button className=" px-3 py-1 border border-sky-700 text-sky-700">
            99 Mounth
          </button>
        </section>
        <section className=" mb-2 flex justify-center items-center">
          <span>Sort by:&nbsp;</span>
          <button className=" text-sky-700">price</button>
          <span>&nbsp;|&nbsp;</span>
          <button className=" text-gray-500">time&nbsp;</button>
          <span className="fa fa-arrow-down text-gray-500"></span>
        </section>
        <div className=" px-4">
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </main>
    </>
  );
}
