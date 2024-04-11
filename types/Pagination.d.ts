export interface PaginationProps {
  pageSize: number;
  count: number;
  navigate?: (toPage: number) => void;
  pageNo?: number;
  siblingCount?: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps>;
export default Pagination;
