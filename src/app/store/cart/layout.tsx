import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping List | Store",
};

export default function LayoutShop({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="page__shop">{children}</main>;
}
