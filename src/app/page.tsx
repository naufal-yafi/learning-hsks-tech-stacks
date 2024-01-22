import ListAllProduct from "@component/ListAllProducts";
import Pagination from "@component/Pagination";

export default function Home({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  const CURRENT_PAGE: number = Number(searchParams.page ?? 1);

  return (
    <main>
      <ListAllProduct page={CURRENT_PAGE} />
      <Pagination currentPage={CURRENT_PAGE} />
    </main>
  );
}
