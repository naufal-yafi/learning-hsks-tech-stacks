"use client";

import useGetPagination from "@hook/useGetPagination";
import EachRender from "@lib/EachRender";
import Link from "next/link";

const Pagination = (props: { currentPage: number }) => {
  const { pagination } = useGetPagination();

  return (
    <section className="container-padding mt-5 flex-center flex-wrap gap-1">
      <EachRender
        of={pagination}
        render={(item: number) => (
          <Link key={item} href={`/?page=${item}`}>
            <button
              className={props.currentPage === item ? "btn" : "btn-outline"}
            >
              {item}
            </button>
          </Link>
        )}
      />
    </section>
  );
};

export default Pagination;
