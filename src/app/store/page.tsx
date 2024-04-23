import Home from "@app/(homepage)/page";

export default function Store({
  searchParams,
}: Readonly<{
  searchParams: { page: string };
}>) {
  return <Home searchParams={searchParams} />;
}
