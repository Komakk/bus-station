import { useState } from "react";
import DatePicker from "./DateInput";
import SearchInput from "./SearchInput";

export default function SearchForm() {
  const [isMini, setIsMini] = useState(true);
  const [fromInputValue, setfromInputValue] = useState("");
  const [toInputValue, settoInputValue] = useState("");

  return (
    <div className="  py-5  bg-sky-800/30 md:bg-sky-800/70 md:w-5/6 md:mx-auto">
      <div
        className={`${
          isMini ? "block" : "hidden"
        } w-11/12 mx-auto md:w-full lg:hidden`}
      >
        <input
          className="px-3 py-2 w-full text-gray-800"
          value={"ExampleCity1 - Examplecity2"}
          onClick={() => setIsMini(!isMini)}
        />
      </div>
      <div
        className={`${
          isMini ? "hidden" : "flex"
        } lg:flex  px-5 flex items-center justify-between`}
      >
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
      <form className={`${isMini ? "hidden" : "block"} lg:block lg:text-sm`}>
        <div className=" relative mt-5 px-5 md:w-1/2 md:inline-block lg:w-[30%]">
          <label className=" drop-shadow-md font-medium">From</label>
          <SearchInput
            formValue={fromInputValue}
            setFormValue={setfromInputValue}
            departure={""}
          />
          <span className=" hidden md:inline-block fa fa-exchange absolute bottom-3 -right-[7px] cursor-pointer"></span>
        </div>

        <div className=" mt-2 px-5 md:w-1/2 md:inline-block lg:w-[30%]">
          <label className=" drop-shadow-md font-medium">To</label>
          <SearchInput
            formValue={toInputValue}
            setFormValue={settoInputValue}
            departure={fromInputValue}
          />
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
