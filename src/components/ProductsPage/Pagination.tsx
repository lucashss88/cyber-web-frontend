import React from "react";
import type { PaginationProps } from "../../types/paginationProps";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => 
{
  const pages = [];

  for (let i = 1; i <= Math.min(3, totalPages); i++) {
    pages.push(i);
  }

  if (totalPages > 4) {
    pages.push("...");
    pages.push(totalPages);
  }

  return (
    <div className=" w-68 md:w-8/11 flex items-center justify-center gap-2 my-11 m-auto">

      <button
        className="px-3 py-1 rounded disabled:opacity-40 md:text-3xl"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-3 py-1 md:text-3xl">
            ...
          </span>
        ) : (
          <button
            key={`page-${page}-${index}`}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 rounded md:text-xl ${
              currentPage === page
                ? "bg-black text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        className="px-3 py-1 rounded disabled:opacity-40 md:text-3xl"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
