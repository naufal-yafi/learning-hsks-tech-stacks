import CardProduct from "@card/CardProduct";
import EachRender from "@lib/EachRender";
import LoadingCardProduct from "@skeleton/LoadingCardProduct";
import ProductType from "@type/product.type";

const ListAllProduct = (props: {
  products: ProductType[];
  loading: boolean;
}) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {props.loading ? (
        <>
          {Array.from({ length: 12 }, (_, index) => (
            <LoadingCardProduct key={index} />
          ))}
        </>
      ) : (
        <EachRender
          of={props.products}
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
