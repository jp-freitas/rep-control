import { Link } from "react-router-dom";
import { Container, Content, ListItem } from "./styles";

interface PaginationProps {
  listPerPage: number;
  listTotal: number;
  paginate: (number: number) => void;
}

export function Pagination({ listPerPage, listTotal, paginate }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(listTotal / listPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Content>
        {pageNumbers.map(number => (
          <ListItem key={number}>
            <Link onClick={() => paginate(number)} to="#">{number}</Link>
          </ListItem>
        ))}
      </Content>
    </Container>
  );
}