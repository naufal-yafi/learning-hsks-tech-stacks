import { ReactNode } from "react";

export default function PreviewProducts({
  id,
  className,
  children,
}: Readonly<{
  id: string;
  className: string;
  children: ReactNode;
}>) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
