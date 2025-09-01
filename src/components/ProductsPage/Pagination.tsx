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
    <div className="flex items-center gap-2 my-11">

      <button
        className="px-3 py-1 rounded disabled:opacity-40"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 rounded ${
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
        className="px-3 py-1 rounded disabled:opacity-40"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
