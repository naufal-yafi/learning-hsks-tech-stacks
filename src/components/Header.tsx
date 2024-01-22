import Link from "next/link";
import { FiBox, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 h-14 px-6 lg:px-32 flex justify-between items-center bg-white w-full">
      <div>
        <Link href="/">
          <span className="flex gap-2 justify-center items-center">
            <FiBox size={"1.5em"} /> Store
          </span>
        </Link>
      </div>

      <div>
        <Link href="/shop">
          <span className="flex justify-center items-center ">
            <p className="absolute text-xs bg-red-600 text-white rounded-full px-2 translate-x-[14px] translate-y-[-8px]">
              0
            </p>
            <FiShoppingCart size={"1.2em"} />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
