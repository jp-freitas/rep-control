import { useState } from "react";
import { RepairHistory } from "./useRep";

export function useRepairHistoryPaginate(list: RepairHistory[], itensPerPage: number) {
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