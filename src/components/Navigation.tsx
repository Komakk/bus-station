import { useState } from "react";
import NavListItem from "./ui/NavListItem";
import SidebarListItem from "./ui/SidebarNavListItem";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navList = [
  {
    title: "Services",
    src: "/#",
    innerList: [
      {
        title: "Advertisement",
        src: "/#",
      },
      {
        title: "Rent",
        src: "/#",
      },
      {
        title: "Cooperation",
        src: "/#",
      },
    ],
  },
  {
    title: "About",
    src: "/#",
    innerList: [
      {
        title: "Management and stations",
        src: "/#",
      },
      {
        title: "Vacancies",
        src: "/#",
      },
      {
        title: "News",
        src: "/#",
      },
    ],
  },
  {
    title: "Passenger Service",
    src: "/#",
    innerList: [
      {
        title: "Boarding and ticket return",
        src: "/#",
      },
      {
        title: "Ticket reservation",
        src: "/#",
      },
      {
        title: "Trip rules",
        src: "/#",
      },
      {
        title: "Passanger insurance",
        src: "/#",
      },
    ],
  },
  {
    title: "Contacts",
    src: "/#",
  },
  {
    title: "Schedule",
    src: "/#",
  },
];

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { currentUser } = useAuth();

  return (
    <>
      <header className=" fixed z-10 bg-white w-full">
        <div className="mx-auto flex relative bg-white items-center justify-center lg:justify-between h-14 md:w-200 lg:w-220 xl:w-[1170px]">
          <button
            className=" absolute left-5 text-gray-500 lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg className=" h-10 w-10 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
          <Link
            className=" px-2 text-2xl uppercase text-blue-700 font-light cursor-pointer hover:text-gray-600 "
            to={"/"}
          >
            <img className=" mr-2 w-10 inline-block " src="/logo.png" />
            <span className=" align-middle">Bus Station</span>
          </Link>
          <nav className=" px-2 hidden lg:block">
            <ul>
              {navList.map((item) => (
                <NavListItem
                  key={item.title}
                  title={item.title}
                  src={item.src}
                  innerList={item.innerList}
                />
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={`fixed overflow-auto w-4/5 h-full top-0 bg-white z-40 ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        {currentUser ? (
          <div className=" p-2 h-24 bg-blue-700 text-white">
            <p className=" mb-1">
              <i className=" pr-1 fa fa-user text-lg" aria-hidden="true"></i>
              {currentUser.email}
            </p>
            <Link
              className=" inline-block mb-1 hover:underline focus:font-semibold"
              to={"/tickets"}
              onClick={() => setIsSidebarOpen(false)}
            >
              Tickets
            </Link>
            <button className=" block hover:underline">Sign Out</button>
          </div>
        ) : (
          <div className=" p-8 h-24 bg-blue-700 text-center text-white">
            <Link to={"/login"} className=" underline cursor-pointer">
              Sign in
            </Link>
            {` ${"\u00A0"} | ${"\u00A0"} `}
            <Link to={"/register"} className=" underline cursor-pointer">
              Sign up
            </Link>
          </div>
        )}

        <div className=" py-4 px-5 border-b flex ">
          <Link
            to={"/"}
            className=" cursor-pointer hover:underline"
            onClick={() => setIsSidebarOpen(false)}
          >
            <p>Search trip</p>
            <p className=" text-xs text-gray-500">and buying tickets</p>
          </Link>
        </div>
        <nav className=" py-4 px-5 pb-24">
          <ul>
            {navList.map((item) => (
              <SidebarListItem
                key={item.title}
                title={item.title}
                src={item.src}
                innerList={item.innerList}
              />
            ))}
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
        className={`fixed top-0 left-0 w-full h-full z-30 backdrop-brightness-50 ${
          isSidebarOpen ? "" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
}
