import { useState } from "react";
import DatePicker from "./DatePicker";
import SearchInput from "./SearchInput";
import { Link, useParams } from "react-router-dom";
import { capitalizeFirstLetter, getDate } from "../../../utils/utils";
import { useAuth } from "../../context/AuthContext";

export default function SearchForm({
  initialIsMini,
}: {
  initialIsMini: boolean;
}) {
  const { from = "Izhevsk", to = "Votkinsk" } = useParams();

  const [isMini, setIsMini] = useState(initialIsMini);
  const [fromInputValue, setfromInputValue] = useState(
    capitalizeFirstLetter(from)
  );
  const [toInputValue, settoInputValue] = useState(capitalizeFirstLetter(to));
  const [date, setDate] = useState(getDate(new Date()));

  const { currentUser } = useAuth();

  const link = `/${fromInputValue}/${toInputValue}/${date}`.toLowerCase();

  return (
    <div className="  py-5  bg-sky-800/30 md:bg-sky-800/70 md:w-5/6 md:mx-auto">
      <div
        className={`${
          isMini ? "block" : "hidden"
        } w-11/12 mx-auto md:w-full lg:hidden`}
      >
        <input
          className="px-3 py-2 w-full text-gray-800"
          value={`${capitalizeFirstLetter(from)} - ${capitalizeFirstLetter(
            to
          )}`}
          onClick={() => setIsMini(!isMini)}
          readOnly
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
          <Link
            to={currentUser ? "/tickets" : "/register"}
            className={`inline-block ${
              currentUser ? "bg-blue-950" : "bg-yellow-500"
            } px-4 py-3 text-sm border cursor-pointer `}
          >
            {currentUser ? (
              <span>
                <i className=" pr-1 fa fa-user" aria-hidden="true"></i>
                Account
              </span>
            ) : (
              "Sign Up"
            )}
          </Link>
          {currentUser ? (
            <button className=" bg-blue-950 px-4 py-3 ml-6 text-sm border cursor-pointer ">
              <i className=" pr-1 fa fa-sign-out"></i>
              Sign Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className=" bg-blue-950 px-4 py-3 ml-6 text-sm border cursor-pointer"
            >
              <i className=" pr-1 fa fa-sign-in"></i>
              Sign In
            </Link>
          )}
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
          <DatePicker dateValue={date} setDateValue={setDate} />
        </div>
        <div className="mt-5 px-5 md:w-1/2 md:inline-block lg:w-[23%]">
          <Link
            to={link}
            className=" inline-block px-3 py-2 w-full bg-yellow-500"
          >
            Search
          </Link>
        </div>
      </form>
    </div>
  );
}
