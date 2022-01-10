import MovieListResult from "./MovieListResult";

export default interface APIResult {
  page?: number;
  results?: MovieListResult[];
  total_pages?: number;
  total_results?: number;
  status_message?: string;
  status_code?: number;
  success?: boolean;
}
