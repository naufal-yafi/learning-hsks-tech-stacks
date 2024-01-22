import Link from "next/link";
import { FiBox } from "react-icons/fi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 h-14 px-6 lg:px-32 flex justify-start items-center bg-white">
      <Link href="/">
        <span className="flex gap-2 justify-center items-center">
          <FiBox size={"1.5em"} /> Store
        </span>
      </Link>
    </header>
  );
};

export default Header;
