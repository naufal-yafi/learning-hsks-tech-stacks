"use client";

import useProductsPagination from "@hook/useProductsPagination";
import ListAllProduct from "@list/ListAllProducts";
import Pagination from "@list/Pagination";
import NotFound from "./not-found";

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  const CURRENT_PAGE: number = Number(searchParams.page ?? 1);
  const { products, loading } = useProductsPagination(CURRENT_PAGE);

  if (products?.length === 0) return <NotFound />;

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
