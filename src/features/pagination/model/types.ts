export interface IPaginationProps {
  totalPages: number;
  handlePageClick: (page: number) => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
}