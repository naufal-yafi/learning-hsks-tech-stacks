import ButtonBackToHome from "@component/ButtonBackToHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Search | Store",
};

export default function LayoutSearch({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main id="page__search">
      <section
        id="section__jumbotron__search"
        className="container-padding pt-5"
      >
        <ButtonBackToHome />

        <h1 className="text-xl">Search Product</h1>
        <p className="text-xs mt-1">looking for something you need</p>
      </section>

      {children}
    </main>
  );
}
