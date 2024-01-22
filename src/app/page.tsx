"use client";

import useGetPagination from "@hook/useGetPagination";
import useProductsPagination from "@hook/useProductsPagination";
import ProductType from "@type/product.type";

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  const CURRENT_PAGE: number = Number(searchParams.page ?? 1);

  const { products, loading } = useProductsPagination(CURRENT_PAGE);
  const { pagination } = useGetPagination();

  return (
    <main className="pt-20">
      <section className="grid grid-cols-6 border-t border-black">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {products?.map((item: ProductType) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </>
        )}
      </section>
      {loading ? <>Loading...</> : <>{JSON.stringify(pagination)}</>}
    </main>
  );
}
