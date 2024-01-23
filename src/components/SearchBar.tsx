"use client";

import useInput from "@hook/useInput";
import useSearch from "@hook/useSearch";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = () => {
  const { show, handleShow } = useSearch();
  const { inputValue, handleInput, clear, clearInput } = useInput();

  return (
    <>
      <button
        className="px-2 py-2 rounded-full hover:bg-neutral-100"
        onClick={handleShow}
      >
        <FiSearch size={"1.2em"} />
      </button>

      <aside
        className={`fixed top-16 right-6 lg:right-32 px-5 py-2 flex-center gap-2 text-xs text-black bg-white border border-black transition duration-500 ${
          show ? "translate-x-[0]" : "translate-x-[1000%]"
        }`}
      >
        <input
          className="outline-none"
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInput}
        />

        <button onClick={clearInput} className={clear ? "block" : "hidden"}>
          <FiX />
        </button>
      </aside>
    </>
  );
};

export default SearchBar;
