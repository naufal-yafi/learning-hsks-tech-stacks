"use client";

import useCart from "@lib/zustand/cart";
import Link from "next/link";
import { FiBox, FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const cart = useCart((state: any) => state.cart.data);

  return (
    <header
      id="header__container"
      className="fixed w-full h-14 z-10 top-0 left-0 container-padding flex-center justify-between bg-white border-b border-black"
    >
      <div id="header__logo">
        <Link href="/">
          <span className="flex-center gap-2">
            <FiBox size={"1.5em"} /> Store
          </span>
        </Link>
      </div>

      <nav id="header__navigation_bar" className="flex-center gap-3">
        <Link href="/store/search">
          <button className="px-2 py-2 rounded-full hover:bg-neutral-100">
            <FiSearch size={"1.2em"} />
          </button>
        </Link>

        <Link href="/store/cart">
          <span className="flex-center">
            <p
              className={`absolute px-2 text-xs translate-x-[14px] translate-y-[-8px] rounded-full bg-red-600 text-white ${
                cart.length > 0 ? "block" : "hidden"
              }`}
            >
              {cart.length}
            </p>
            <FiShoppingCart size={"1.2em"} />
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
