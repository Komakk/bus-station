import { useEffect, useState } from "react";
import useDebounce from "../custom-hooks/useDebounce";

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
  const [inputValue, setInputValue] = useState("");
  const [isSearchSuggestionsVisible, setIsSearchSuggestionsVisible] =
    useState(false);
  const [popRoutes, setPopRoutes] = useState<Array<string>>([]);
  const [searchList, setSearchList] = useState<Array<string>>([]);
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
        className="w-full text-gray-800 px-3 py-2 outline-none"
        type="text"
        placeholder="Select or type city"
        value={inputValue}
        onChange={(e) => {
          loadDataDebounced(e.target.value);
          setInputValue(e.target.value);
        }}
        onClick={() => {
          setIsSearchSuggestionsVisible(true);
          setInputValue("");
          setSearchList([]);
        }}
        onBlur={() => {
          setTimeout(() => {
            setIsSearchSuggestionsVisible(false);
          }, 250);
          setInputValue(formValue);
        }}
      ></input>

      <ul
        className={` z-10 mt-1 absolute w-80 bg-white text-gray-900 text-base border border-b-0 border-gray-300 ${
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
              <li key={item} className=" px-3 py-1 border-b border-gray-300">
                {item}
              </li>
            );
          } else {
            return (
              <li
                className=" px-3 py-1 cursor-pointer border-b border-gray-300 hover:bg-gray-200"
                key={item}
                onClick={() => {
                  setFormValue(item);
                  setInputValue(item);
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
