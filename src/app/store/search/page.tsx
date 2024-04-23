"use client";

import { useInput } from "@hook/use-input";
import { useSearch } from "@hook/use-search";
import { ListAllProduct } from "@list/list-all-products";
import dynamic from "next/dynamic";
import { FiX } from "react-icons/fi";
import {
  NotValidInput,
  PreviewProducts,
  RequireInput,
  ResponseValidInput,
} from "./_partials";

const Pagination = dynamic(() => import("@component/pagination"), {
  ssr: true,
});

type SettingsType = {
  NOT_VALID_INPUT: boolean;
  DISPLAY_PRODUCT_IF_INPUT_EXCEEDS_THREE_LETTERS: string;
  DISPLAY_PRODUCT_IF_THE_INPUT_IS_STILL_EMPTY: string;
  SHOW_X_BUTTON_IF_INPUT_IS_NOT_EMPTY: string;
};

export default function SearchPage() {
  const { inputValue, clear, handleInput, clearInput, handleDeleteKey } =
    useInput();
  const INPUT_VALUE_LENGTH = inputValue.length;
  const { products, loading, result, isFind, loadingSearch } = useSearch(
    INPUT_VALUE_LENGTH < 4 ? "" : inputValue,
  );

  const settings: SettingsType = {
    NOT_VALID_INPUT: INPUT_VALUE_LENGTH > 3 && inputValue.trim() === "",
    DISPLAY_PRODUCT_IF_INPUT_EXCEEDS_THREE_LETTERS:
      INPUT_VALUE_LENGTH > 3 ? "block" : "hidden",
    DISPLAY_PRODUCT_IF_THE_INPUT_IS_STILL_EMPTY:
      INPUT_VALUE_LENGTH < 1 ? "block" : "hidden",
    SHOW_X_BUTTON_IF_INPUT_IS_NOT_EMPTY: clear ? "block" : "hidden",
  };

  return (
    <>
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
          className={`${settings.SHOW_X_BUTTON_IF_INPUT_IS_NOT_EMPTY} p-2`}
          onClick={clearInput}
        >
          <FiX size={"0.8em"} />
        </button>
      </section>

      <RequireInput inputValueLength={INPUT_VALUE_LENGTH} />

      {settings.NOT_VALID_INPUT ? (
        <NotValidInput />
      ) : (
        <>
          <ResponseValidInput
            inputValueLength={INPUT_VALUE_LENGTH}
            isNotFind={!isFind}
            isLoading={loadingSearch}
            clearFunction={clearInput}
          />

          <PreviewProducts
            id="section__search__result__preview__products"
            className={settings.DISPLAY_PRODUCT_IF_INPUT_EXCEEDS_THREE_LETTERS}
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
            className={`border-t border-black mt-8 ${settings.DISPLAY_PRODUCT_IF_THE_INPUT_IS_STILL_EMPTY}`}
          >
            <ListAllProduct products={products} loading={loading} />
            <Pagination currentPage={1} />
          </PreviewProducts>
        </>
      )}
    </>
  );
}
