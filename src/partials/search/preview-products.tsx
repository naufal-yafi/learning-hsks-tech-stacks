import React from "react";

const PreviewProducts = ({
  id,
  className,
  children,
}: {
  id: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className={className}
    >
      {children}
    </section>
  );
};

export default PreviewProducts;
