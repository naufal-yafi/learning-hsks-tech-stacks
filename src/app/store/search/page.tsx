"use client";

import ListAllProduct from "@component/EachRender/ListAllProducts";
import useInput from "@hook/useInput";
import useSearch from "@hook/useSearch";
import React from "react";
import { FiX } from "react-icons/fi";

export default function SearchPage() {
  const { inputValue, clear, handleInput, clearInput, handleDeleteKey } =
    useInput();
  const { products, loading, result, isFind, loadingSearch } = useSearch(
    inputValue.length < 4 ? "" : inputValue,
  );

  return (
    <React.Fragment>
      <section
        id="search__input__bar"
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
        id="search__info__require__input"
        className={`container-padding mt-2 text-xs ${
          inputValue.length > 0 && inputValue.length < 4 ? "block" : "hidden"
        }`}
      >
        Require input {inputValue.length}/4
      </section>

      <section
        id="search__response"
        className={`container-padding text-center my-8 ${
          inputValue.length > 3 && !isFind ? "block" : "hidden"
        }`}
      >
        {loadingSearch ? (
          <h1 className="text-xs">Please wait..</h1>
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </section>

      <div
        id="search__result__product"
        className={inputValue.length > 3 ? "block" : "hidden"}
      >
        <div
          className={`border-t border-black mt-8 ${
            isFind ? "block" : "hidden"
          }`}
        >
          <ListAllProduct products={result} loading={loading} />
        </div>
      </div>

      <div
        className={`border-t border-black mt-8 ${
          inputValue.length < 1 ? "block" : "hidden"
        }`}
      >
        <ListAllProduct products={products} loading={loading} />
      </div>
    </React.Fragment>
  );
}
