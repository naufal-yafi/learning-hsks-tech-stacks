import config from "@lib/api/config";
import fetcher from "@lib/swr/fetcher";
import ProductType from "@type/product.type";
import useSWR from "swr";

const useSearch = (
  input: string,
): {
  products: ProductType[];
  loading: boolean;
  result: ProductType[];
  isFind: boolean;
} => {
  const { data: products, isLoading } = useSWR(
    `${config.api_url.products}?offset=1&limit=12`,
    fetcher,
  );
  const { data: searchByTitle } = useSWR(
    `${config.api_url.products}?title=${input}`,
    fetcher,
  );

  return {
    products: products,
    loading: isLoading,
    result: searchByTitle,
    isFind: searchByTitle?.length > 0,
  };
};

export default useSearch;
