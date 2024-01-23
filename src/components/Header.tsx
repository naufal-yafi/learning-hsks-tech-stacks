import Link from "next/link";
import { FiBox, FiShoppingCart } from "react-icons/fi";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="fixed w-full h-14 z-10 top-0 left-0 container-padding flex-center justify-between bg-white border-b border-black">
      <div>
        <Link href="/">
          <span className="flex-center gap-2">
            <FiBox size={"1.5em"} /> Store
          </span>
        </Link>
      </div>

      <nav className="flex-center gap-3">
        <SearchBar />

        <Link href="/shop">
          <span className="flex-center">
            <p className="absolute px-2 text-xs translate-x-[14px] translate-y-[-8px] rounded-full bg-red-600 text-white">
              0
            </p>
            <FiShoppingCart size={"1.2em"} />
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
