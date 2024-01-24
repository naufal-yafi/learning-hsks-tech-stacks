"use client";

import useInput from "@hook/useInput";
import useSearch from "@hook/useSearch";
import ListAllProduct from "@list/ListAllProducts";
import NotValidInput from "@partial/Search/NotValidInput";
import PreviewProducts from "@partial/Search/PreviewProducts";
import RequireInput from "@partial/Search/RequireInput";
import ResponseValidInput from "@partial/Search/ResponseValidInput";
import React from "react";
import { FiX } from "react-icons/fi";

export default function SearchPage() {
  const { inputValue, clear, handleInput, clearInput, handleDeleteKey } =
    useInput();
  const { products, loading, result, isFind, loadingSearch } = useSearch(
    inputValue.length < 4 ? "" : inputValue,
  );
  const NOT_VALID_INPUT = inputValue.length > 3 && inputValue.trim() === "";

  return (
    <React.Fragment>
      <section
        id="section__search__input"
        className="container-padding py-4 mt-12 flex-center border-t border-b border-black"
      >
        <input
          id="search__input__bar"
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

      <RequireInput inputValueLength={inputValue.length} />

      {NOT_VALID_INPUT ? (
        <NotValidInput />
      ) : (
        <React.Fragment>
          <ResponseValidInput
            inputValueLength={inputValue.length}
            isNotFind={!isFind}
            isLoading={loadingSearch}
            clearFunction={clearInput}
          />

          <PreviewProducts
            id="section__search__result__preview__products"
            className={inputValue.length > 3 ? "block" : "hidden"}
          >
            <div
              className={`border-t border-black mt-8 ${
                isFind ? "block" : "hidden"
              }`}
            >
              <ListAllProduct products={result} loading={loading} />
            </div>
          </PreviewProducts>

          <PreviewProducts
            id="section__search__default__preview__products"
            className={`border-t border-black mt-8 ${
              inputValue.length < 1 ? "block" : "hidden"
            }`}
          >
            <ListAllProduct products={products} loading={loading} />
          </PreviewProducts>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
