"use client";

import ListAllProduct from "@component/EachRender/ListAllProducts";
import useInput from "@hook/useInput";
import useSearch from "@hook/useSearch";
import { FiX } from "react-icons/fi";

export default function SearchPage() {
  const { inputValue, clear, handleInput, clearInput, handleDeleteKey } =
    useInput();
  const { products, loading, result, isFind } = useSearch(
    inputValue.length < 4 ? "" : inputValue,
  );

  return (
    <>
      <section
        id="search-bar"
        className="container-padding py-4 mt-12 flex-center border-t border-b border-black"
      >
        <input
          type="text"
          placeholder="Search anything product..."
          className="text-xs text-black outline-none w-full placeholder:text-black/70"
          value={inputValue}
          onChange={(e) => {
            handleInput(e);
          }}
          onKeyDown={handleDeleteKey}
        />

        <button
          className={`${clear ? "block" : "hidden"} p-2`}
          onClick={clearInput}
        >
          <FiX size={"0.8em"} />
        </button>
      </section>

      <section
        className={`container-padding text-center my-8 ${
          inputValue.length > 3 && !isFind ? "block" : "hidden"
        }`}
      >
        <h1 className="text-xl">Not Found</h1>
        <p className="text-xs mt-2">
          Press{" "}
          <button
            className="px-2 mx-1 rounded-sm bg-black text-white"
            onClick={clearInput}
          >
            DELETE
          </button>{" "}
          to clear search.
        </p>
      </section>

      <div className="border-t border-black mt-8">
        {isFind ? (
          <ListAllProduct products={result} loading={loading} />
        ) : (
          <ListAllProduct products={products} loading={loading} />
        )}
      </div>
    </>
  );
}
