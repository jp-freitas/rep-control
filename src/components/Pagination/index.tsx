import { Link } from "react-router-dom";
import { Container, Content, ListItem } from "./styles";

interface PaginationProps {
  repsPerPage: number;
  totalReps: number;
  paginate: (number: number) => void;
}

export function Pagination({ repsPerPage, totalReps, paginate }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReps / repsPerPage); i++) {
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