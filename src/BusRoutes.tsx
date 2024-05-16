import DayPicker from "./components/DayPicker";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import SideBar from "./components/SideBar";
import Ticket from "./components/Ticket";

export default function BusRoutes() {
  const date = new Date();
  return (
    <>
      <Navigation />
      <main className=" relative top-14">
        <div className=" bg-sky-800 text-white ">
          <SearchForm />
        </div>

        <div className="md:w-200 lg:w-220 xl:w-[1170px] mx-auto lg:flex">
          <div className=" px-4 lg:w-3/4">
            <section className=" py-4 flex justify-between">
              <DayPicker
                date={new Date(date.getTime() - 24 * 60 * 60 * 1000)}
              />
              <span className=" px-3 py-1 text-xl text-sky-700">
                {date.toDateString()}
              </span>
              <DayPicker
                date={new Date(date.getTime() + 24 * 60 * 60 * 1000)}
              />
            </section>
            <section className=" mb-2 flex justify-center items-center">
              <span>Sort by:&nbsp;</span>
              <button className=" text-sky-700">price</button>
              <span>&nbsp;|&nbsp;</span>
              <button className=" text-gray-500">time&nbsp;</button>
              <span className="fa fa-arrow-down text-gray-500"></span>
            </section>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
          </div>
          <SideBar />
        </div>

        <Footer />
      </main>
    </>
  );
}
