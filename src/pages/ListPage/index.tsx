import { Header } from "../../components/Header";
import { TableContent } from "../../components/TableContent";
import { Container } from "./styles";

export function ListPage() {
  return (
    <Container>
      <Header />
      <TableContent />
    </Container>
  );
}