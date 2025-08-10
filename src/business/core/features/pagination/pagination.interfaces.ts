export interface Pagination {
  take?: number;
  skip?: number;
  search?: string;
  order?: "ASC" | "DESC";
}
