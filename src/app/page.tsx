"use client";

import ListAllProduct from "@each_render/ListAllProducts";
import Pagination from "@each_render/Pagination";
import useProductsPagination from "@hook/useProductsPagination";
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
      <ListAllProduct products={products} loading={loading} />
      <Pagination currentPage={CURRENT_PAGE} />
    </main>
  );
}
