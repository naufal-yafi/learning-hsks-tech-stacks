import { Children, ReactNode } from "react";

function EachRender({ render, of }: { render: any; of: any[] }): ReactNode {
  return Children.toArray(of?.map((item) => render(item)));
}

function formatDate(created_at: string, update_at: string): string {
  const getDate = created_at !== update_at ? update_at : created_at;
  const convert_format_date = new Date(getDate);

  return convert_format_date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export { EachRender, formatDate };
