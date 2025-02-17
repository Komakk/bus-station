import { useEffect, useRef, useState } from "react";
import useDebounce from "../../custom-hooks/useDebounce";

interface SearchInputProps {
  formValue: string;
  setFormValue: (value: React.SetStateAction<string>) => void;
  departure: string;
}

export default function SearchInput({
  formValue,
  setFormValue,
  departure,
}: SearchInputProps) {
  const [isSearchSuggestionsVisible, setIsSearchSuggestionsVisible] =
    useState(false);
  const [popRoutes, setPopRoutes] = useState<Array<string>>([]);
  const [searchList, setSearchList] = useState<Array<string>>([]);
  const ref = useRef<HTMLInputElement>(null);
  const prevValue = useRef(formValue);
  const loadDataDebounced = useDebounce(loadData, 400);

  const suggestionList = searchList.length ? searchList : popRoutes;

  useEffect(() => {
    getPopRoutes(departure);
  }, [departure]);

  async function loadData(value: string) {
    if (value === "") {
      setSearchList([]);
      return;
    }
    const response = await fetch(`http://localhost:8000/search/${value}`);
    const res = await response.json();
    setSearchList(res.length ? res : ["Not found"]);
  }

  async function getPopRoutes(departure: string) {
    const response = await fetch(
      `http://localhost:8000/getPopRoutes/${departure}`
    );
    const res = await response.json();
    setPopRoutes(res);
  }

  return (
    <div
      className={`${
        isSearchSuggestionsVisible
          ? "fixed p-4 top-0 left-0 bottom-0 right-0 z-20 bg-white md:p-0 md:static"
          : "static"
      }`}
    >
      <div
        className={`${
          isSearchSuggestionsVisible
            ? " pb-4 flex items-center justify-between text-gray-800 text-lg md:hidden"
            : "hidden"
        }`}
      >
        <span>{departure ? "To" : "From"}</span>
        <span className="fa fa-times"></span>
      </div>
      <input
        ref={ref}
        className="w-full text-gray-800 px-3 py-2 outline-none focus:ring-1 ring-gray-300 "
        type="text"
        placeholder="Select or type city"
        value={formValue}
        onChange={(e) => {
          loadDataDebounced(e.target.value);
          setFormValue(e.target.value);
        }}
        onClick={() => {
          setIsSearchSuggestionsVisible(true);
          setFormValue("");
          setSearchList([]);
        }}
        onBlur={() => {
          setTimeout(() => {
            setIsSearchSuggestionsVisible(false);
            setFormValue(prevValue.current);
          }, 250);
        }}
      ></input>

      <ul
        className={` z-10 left-0 mt-1 absolute w-full md:w-80 md:left-auto left bg-white text-gray-900 text-base md:border md:border-b-0 border-gray-300 ${
          isSearchSuggestionsVisible ? "" : "hidden"
        }`}
      >
        {!searchList.length && (
          <li className=" px-3 py-1 text-xs text-gray-400">
            Popular destinations
          </li>
        )}
        {suggestionList.map((item) => {
          if (item === "Not found") {
            return (
              <li key={item} className=" px-6 py-2 border-b border-gray-300">
                {item}
              </li>
            );
          } else {
            return (
              <li
                className=" px-6 py-2 cursor-pointer border-b border-gray-300 hover:bg-gray-200"
                key={item}
                onClick={() => {
                  prevValue.current = item;
                  setFormValue(item);
                }}
              >
                {item}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
