import { useState } from "react";
import { Rep } from "./useReps";

export function usePaginate(list: Rep[], itensPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itensPerPage;
  const indexOfFirstItem = indexOfLastItem - itensPerPage;
  const currentList = list.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    currentList,
    paginate,
    currentPage,
    itensPerPage,
  }
}