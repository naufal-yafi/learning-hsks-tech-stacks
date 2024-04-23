import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export function ButtonBackToHome() {
  return (
    <Link href="/">
      <button id="btn__back__home" className="mb-5 btn-secondary">
        <p className="flex-center gap-4">
          <FiArrowLeft size={"1.5em"} />
          Home
        </p>
      </button>
    </Link>
  );
}
