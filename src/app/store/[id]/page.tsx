import CardProductDetail from "@component/Card/CardProductDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail | Store",
};

export default function ProductDetail({
  params,
}: Readonly<{ params: { id: string } }>) {
  return (
    <main className="pt-20">
      <CardProductDetail id={Number(params.id)} />
    </main>
  );
}
