"use client";

import CardProduct from "@card/CardProduct";
import useProductsPagination from "@hook/useProductsPagination";
import EachRender from "@lib/EachRender";
import LoadingCardProduct from "@skeleton/LoadingCardProduct";
import ProductType from "@type/product.type";

const ListAllProduct = (props: { page: number }) => {
  const { products, loading } = useProductsPagination(props.page);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {loading ? (
        <>
          {Array.from({ length: 12 }, (_, index) => (
            <LoadingCardProduct key={index} />
          ))}
        </>
      ) : (
        <EachRender
          of={products}
          render={(product: ProductType) => (
            <CardProduct
              id={product.id}
              key={product.id}
              title={product.title}
              images={product.images}
              description={product.description}
              price={product.price}
            />
          )}
        />
      )}
    </section>
  );
};

export default ListAllProduct;
