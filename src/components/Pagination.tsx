"use client";

import useGetPagination from "@hook/useGetPagination";
import Link from "next/link";

const Pagination = (props: { currentPage: number }) => {
  const { pagination } = useGetPagination();

  return (
    <section className="flex gap-1 mt-5 justify-center items-center px-6 lg:px-32 flex-wrap">
      {pagination?.map((item: number) => (
        <Link key={item} href={`/?page=${item}`}>
          <button
            className={props.currentPage === item ? "btn" : "btn-outline"}
          >
            {item}
          </button>
        </Link>
      ))}
    </section>
  );
};

export default Pagination;
