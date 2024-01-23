"use client";

import useGetPagination from "@hook/useGetPagination";
import EachRender from "@lib/EachRender";
import Link from "next/link";

const Pagination = (props: { currentPage: number }) => {
  const { pagination } = useGetPagination();

  return (
    <section
      id="section__pagination"
      className="container-padding mt-5 flex-center flex-wrap gap-1"
    >
      <EachRender
        of={pagination}
        render={(pageNumber: number) => (
          <Link key={pageNumber} href={`/?page=${pageNumber}`}>
            <button
              className={
                props.currentPage === pageNumber ? "btn" : "btn-outline"
              }
            >
              {pageNumber}
            </button>
          </Link>
        )}
      />
    </section>
  );
};

export default Pagination;
