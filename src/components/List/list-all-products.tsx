import { CardProduct } from "@card/card-product";
import { EachRender } from "@lib/common";
import LoadingCardProduct from "@skeleton/loading-card-product";
import ProductType from "@type/product.type";

export function ListAllProduct({
  products,
  loading,
}: Readonly<{
  products: ProductType[];
  loading: boolean;
}>) {
  return (
    <div
      id="list__all__product"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
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
    </div>
  );
}
