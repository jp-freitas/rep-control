import { Header } from '../../components/Header';
import { TableContent } from '../../components/TableContent';
import { Container } from "./styles";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <TableContent />
      </Container>
    </>
  );
}