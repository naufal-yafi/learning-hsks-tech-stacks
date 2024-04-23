"use client";

import { useProductsPagination } from "@hook/use-products-pagination";
import { ListAllProduct } from "@list/list-all-products";
import dynamic from "next/dynamic";
import NotFound from "../not-found";

const Pagination = dynamic(() => import("@component/pagination"), {
  ssr: true,
});

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  const CURRENT_PAGE: number = Number(searchParams.page ?? 1);
  const { products, loading } = useProductsPagination(CURRENT_PAGE);

  const IS_EMPTY_PRODUCTS: boolean = products?.length === 0;
  if (IS_EMPTY_PRODUCTS) return <NotFound />;

  return (
    <main id="page__home">
      <section id="section__list__product">
        <ListAllProduct products={products} loading={loading} />
      </section>

      <section id="section__pagination">
        <Pagination currentPage={CURRENT_PAGE} />
      </section>
    </main>
  );
}
