import { useState } from "react";
import ListItem from "./ListItem";

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex relative items-center justify-center h-14 md:w-200 md:mx-auto">
        <button
          className=" absolute left-5 text-gray-500 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg className=" h-10 w-10 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <a
          className="  text-2xl uppercase text-blue-700 font-light cursor-pointer hover:text-gray-600 "
          href="#"
        >
          <img className=" mr-2 w-10 inline-block " src="./public/logo.png" />
          <span className=" align-middle">Bus Station</span>
        </a>
        <nav>
          <ul>
            <li className=" px-2 inline-block text-sm text-gray-400 uppercase">
              Services
            </li>
            <li className=" px-2 inline-block text-sm text-gray-400 uppercase">
              About
            </li>
            <li className=" px-2 inline-block text-sm text-gray-400 uppercase">
              About
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={`fixed overflow-auto w-4/5 h-full top-0 bg-white z-50 ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className=" p-8 h-24 bg-blue-700 text-center text-white">
          <a className=" underline cursor-pointer">Sign in</a>
          {` ${"\u00A0"} | ${"\u00A0"} `}
          <a className=" underline cursor-pointer">Sign up</a>
        </div>
        <div className=" py-4 px-5 border-b flex ">
          <a className=" cursor-pointer hover:underline">
            <p>Search trip</p>
            <p className=" text-xs text-gray-500">and buying tickets</p>
          </a>
        </div>
        <nav className=" py-4 px-5 pb-24">
          <ul>
            <ListItem
              title="Services"
              src="/#"
              innerList={["Advertisement", "Rent", "Cooperation"]}
            />
            <ListItem
              title="About"
              src="/#"
              innerList={["Management and stations", "Vacancies", "News"]}
            />
            <ListItem
              title="Passenger Service"
              src="/#"
              innerList={[
                "Boarding and ticket return",
                "Ticket reservation",
                "Trip rules",
                "Passenger insurance",
              ]}
            />
            <ListItem title="Contacts" src="/#" />
            <ListItem title="Schedule" src="/#" />
          </ul>
        </nav>
        <div className=" fixed w-4/5 bottom-0 p-2">
          <a className=" p-2 w-full block text-center bg-green-500 text-white cursor-pointer hover:bg-green-600">
            MOBILE APPLICATION
          </a>
          <a className=" p-2 mt-1 w-full block text-center bg-yellow-500 text-white cursor-pointer hover:bg-green-700">
            SUPPORT
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 backdrop-brightness-50 ${
          isSidebarOpen ? "" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
}
