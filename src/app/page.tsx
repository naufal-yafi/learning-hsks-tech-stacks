"use client";

import useGetPagination from "@hook/useGetPagination";
import useProductsPagination from "@hook/useProductsPagination";

export default function Home() {
  const { products, loading } = useProductsPagination(5);
  const { pagination } = useGetPagination();

  return (
    <main className="pt-20">
      <section className="grid grid-cols-6 border-t border-black">
        {loading ? <>Loading...</> : <>{JSON.stringify(products)}</>}
        {loading ? <>Loading...</> : <>{JSON.stringify(pagination)}</>}
      </section>
    </main>
  );
}
