import config from "@lib/api/config";
import fetcher from "@lib/swr/fetcher";
import ProductType from "@type/product.type";
import useSWR from "swr";

const useProductDetail = (
  id: number,
): { products: Promise<ProductType>; error: string; loading: boolean } => {
  const { data, error, isLoading } = useSWR(
    `${config.api_url.products}/${id}`,
    fetcher,
  );

  return {
    products: data,
    error,
    loading: isLoading,
  };
};

export default useProductDetail;
