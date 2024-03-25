import { useState } from "react";
import DatePicker from "./DatePicker";

export default function SearchForm() {
  const [fromInputValue, setFromInputValue] = useState("Izhevsk");
  const [isSearchSuggestionsVisible, setIsSearchSuggestionsVisible] =
    useState(false);
  return (
    <div className="  py-5 bg-sky-800/30 md:bg-sky-800/70 md:w-5/6 md:mx-auto md:border-t-4 border-blue-400">
      <div className=" px-5 flex items-center justify-between">
        <h2 className=" pl-2 text-2xl font-medium drop-shadow-lg">
          Buy ticket
        </h2>
        <div className=" hidden lg:block">
          <a className=" bg-yellow-500 px-4 py-3 text-sm border cursor-pointer">
            Sign Up
          </a>
          <a className=" bg-blue-950 px-4 py-3 ml-6 text-sm border cursor-pointer">
            <i className=" pr-1 fa fa-sign-in"></i>
            Sign In
          </a>
        </div>
      </div>
      <form className=" lg:text-sm">
        <div className=" relative mt-5 px-5 md:w-1/2 md:inline-block lg:w-[30%]">
          <label className=" drop-shadow-md font-medium">From</label>
          <input
            className="w-full text-gray-800 px-3 py-2"
            type="text"
            value={fromInputValue}
            onChange={(e) => setFromInputValue(e.target.value)}
            onClick={() => setIsSearchSuggestionsVisible(true)}
            onBlur={() =>
              setTimeout(() => {
                setIsSearchSuggestionsVisible(false);
              }, 250)
            }
          ></input>
          <span className="fa fa-exchange absolute bottom-3 -right-[7px] cursor-pointer"></span>
          <ul
            className={` z-10 mt-1 absolute w-96 bg-white text-gray-900 text-base border border-b-0 border-gray-300 ${
              isSearchSuggestionsVisible ? "" : "hidden"
            }`}
          >
            <li className=" px-3 py-1 text-xs text-gray-400">
              Popular destinations
            </li>
            {[
              "Izhevsk",
              "Votkinsk",
              "Sarapul",
              "Glazov",
              "Mozhga",
              "Kambarka",
            ].map((item) => (
              <li
                className=" px-3 py-1 cursor-pointer border-b border-gray-300 hover:bg-gray-200"
                key={item}
                onClick={() => {
                  setFromInputValue(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className=" mt-2 px-5 md:w-1/2 md:inline-block lg:w-[30%]">
          <label className=" drop-shadow-md font-medium">To</label>
          <input
            className="w-full text-gray-800 px-3 py-2"
            type="text"
            value={"Mozhga"}
          ></input>
        </div>
        <div className="mt-2 px-5 md:w-1/2 md:inline-block lg:w-[17%]">
          <label className=" drop-shadow-md font-medium whitespace-nowrap">
            Departure date
          </label>
          <DatePicker />
        </div>
        <div className="mt-5 px-5 md:w-1/2 md:inline-block lg:w-[23%]">
          <button className=" px-3 py-2 w-full bg-yellow-500" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
