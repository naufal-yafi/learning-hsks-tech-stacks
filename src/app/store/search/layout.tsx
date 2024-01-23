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
    <main>
      <section className="container-padding pt-5">
        <h1 className="text-xl">Search Product</h1>
        <p className="text-xs mt-1">looking for something you need</p>
      </section>

      {children}
    </main>
  );
}
