import Home from "../page";

export default function Store({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  return <Home searchParams={searchParams} />;
}
