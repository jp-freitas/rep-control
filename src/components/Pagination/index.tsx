import { Link } from "react-router-dom";
import { Container, Content, ListItem } from "./styles";

interface PaginationProps {
  listPerPage: number;
  listTotal: number;
  currentPage: number;
  paginate: (number: number) => void;
}

export function Pagination({ listPerPage, listTotal, paginate, currentPage }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(listTotal / listPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Content>
        {pageNumbers.map(number => (
          <ListItem key={number}>
            <Link onClick={() => paginate(number)} to="#" className={number === currentPage ? "active" : ""}>{number}</Link>
          </ListItem>
        ))}
      </Content>
    </Container>
  );
}