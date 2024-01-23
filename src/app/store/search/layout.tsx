import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Product Search | Store",
};

export default function LayoutSearch({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <section className="container-padding pt-5">
        <Link href="/">
          <button className="mb-5 btn-secondary">
            <p className="flex-center gap-4">
              <FiArrowLeft size={"1.5em"} />
              Home
            </p>
          </button>
        </Link>
        <h1 className="text-xl">Search Product</h1>
        <p className="text-xs mt-1">looking for something you need</p>
      </section>

      {children}
    </main>
  );
}
