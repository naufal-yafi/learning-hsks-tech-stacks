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
  loadingSearch: boolean;
  isFind: boolean;
} => {
  const { data: products, isLoading } = useSWR(
    `${config.api_url.products}?offset=1&limit=12`,
    fetcher,
  );
  const { data: searchByTitle, isLoading: loadingSearch } = useSWR(
    `${config.api_url.products}?title=${input}`,
    fetcher,
  );

  return {
    products: products,
    loading: isLoading,
    result: searchByTitle,
    loadingSearch: loadingSearch,
    isFind: searchByTitle?.length > 0,
  };
};

export default useSearch;
