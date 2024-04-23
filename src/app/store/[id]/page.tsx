import type { Metadata } from "next";
import { CardProductDetail } from "./_partials";

export const metadata: Metadata = {
  title: "Product Detail | Store",
};

export default function ProductDetail({
  params,
}: Readonly<{ params: { id: string } }>) {
  return (
    <main id="page__product__detail" className="pt-20">
      <section id="section__product__detail" className="container-padding">
        <CardProductDetail id={Number(params.id)} />
      </section>
    </main>
  );
}
