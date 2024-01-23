"use client";

import ListAllProduct from "@each_render/ListAllProducts";
import Pagination from "@each_render/Pagination";
import useProductsPagination from "@hook/useProductsPagination";

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  const CURRENT_PAGE: number = Number(searchParams.page ?? 1);
  const { products, loading } = useProductsPagination(CURRENT_PAGE);

  return (
    <main>
      <ListAllProduct products={products} loading={loading} />
      <Pagination currentPage={CURRENT_PAGE} />
    </main>
  );
}
