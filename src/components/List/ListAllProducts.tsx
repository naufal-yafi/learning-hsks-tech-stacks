import CardProduct from "@component/Card/CardProduct";
import LoadingCardProduct from "@component/Loading/LoadingCardProduct";
import EachRender from "@lib/EachRender";
import ProductType from "@type/product.type";
import React from "react";

const ListAllProduct = ({
  products,
  loading,
}: {
  products: ProductType[];
  loading: boolean;
}) => {
  return (
    <div
      id="list__all__product"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
      {loading ? (
        <React.Fragment>
          {Array.from({ length: 12 }, (_, index) => (
            <LoadingCardProduct key={index} />
          ))}
        </React.Fragment>
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
    </div>
  );
};

export default ListAllProduct;
