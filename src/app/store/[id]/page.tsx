"use client";

import CardProductDetail from "@component/CardProductDetail";

export default function ProductDetail({
  params,
}: Readonly<{ params: { id: string } }>) {
  return (
    <main className="pt-20">
      <CardProductDetail id={Number(params.id)} />
    </main>
  );
}
