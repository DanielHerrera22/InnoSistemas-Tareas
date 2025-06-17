import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";

export const TaskPaginationSection = (): JSX.Element => {
  // Define pagination data
  const paginationData = {
    currentPage: 1,
    totalPages: 3,
  };

  return (
    <nav className="flex justify-center w-full pt-4">
      <Pagination>
        <PaginationContent className="flex items-center gap-1">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white p-0"
              aria-label="Go to previous page"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </PaginationPrevious>
          </PaginationItem>

          {[1, 2, 3].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                className={`flex h-8 w-8 items-center justify-center rounded-md ${
                  page === paginationData.currentPage
                    ? "bg-[#307dfd] text-white"
                    : "bg-white text-[#6b7280] border border-input"
                }`}
                aria-current={
                  page === paginationData.currentPage ? "page" : undefined
                }
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white p-0"
              aria-label="Go to next page"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </nav>
  );
};
