import config from "@lib/api/config";
import fetcher from "@lib/swr/fetcher";
import ProductType from "@type/product.type";
import useSWR from "swr";

export function useProductsPagination(page: number = 1): {
  products: ProductType[];
  error: string;
  loading: boolean;
} {
  const { data, error, isLoading } = useSWR(
    `${config.api_url.products}?offset=${config.offset(page)}&limit=${
      config.limit
    }`,
    fetcher,
  );

  return {
    products: data,
    error,
    loading: isLoading,
  };
}
