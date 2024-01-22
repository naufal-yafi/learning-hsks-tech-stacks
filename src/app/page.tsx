"use client";

import CardProduct from "@component/CardProduct";
import Pagination from "@component/Pagination";
import useProductsPagination from "@hook/useProductsPagination";
import ProductType from "@type/product.type";

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  const CURRENT_PAGE: number = Number(searchParams.page ?? 1);

  const { products, loading } = useProductsPagination(CURRENT_PAGE);

  return (
    <main className="pt-20">
      <section className="grid grid-cols-6 border-t border-black">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {products?.map((item: ProductType) => (
              <CardProduct
                id={item.id}
                key={item.id}
                title={item.title}
                images={item.images}
                description={item.description}
                price={item.price}
              />
            ))}
          </>
        )}
      </section>

      <Pagination currentPage={CURRENT_PAGE} />
    </main>
  );
}
