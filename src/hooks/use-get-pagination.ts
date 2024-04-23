import config from "@lib/api/config";
import fetcher from "@lib/swr/fetcher";
import useSWR from "swr";

const useGetPagination = (): { pagination: number[]; loading: boolean } => {
  const { data, isLoading } = useSWR(config.api_url.products, fetcher);

  const totalPage: number = Math.ceil(data?.length / config.limit);

  return {
    pagination: Array.from({ length: totalPage }, (_, index) => index + 1),
    loading: isLoading,
  };
};

export default useGetPagination;
