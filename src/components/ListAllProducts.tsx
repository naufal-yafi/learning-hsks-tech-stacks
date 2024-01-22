"use client";

import useProductsPagination from "@hook/useProductsPagination";
import EachRender from "@lib/EachRender";
import ProductType from "@type/product.type";
import CardProduct from "./CardProduct";

const ListAllProduct = (props: { page: number }) => {
  const { products, loading } = useProductsPagination(props.page);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 border-t border-black">
      {loading ? (
        <>Loading...</>
      ) : (
        <EachRender
          of={products}
          render={(item: ProductType) => (
            <CardProduct
              id={item.id}
              key={item.id}
              title={item.title}
              images={item.images}
              description={item.description}
              price={item.price}
            />
          )}
        />
      )}
    </section>
  );
};

export default ListAllProduct;
