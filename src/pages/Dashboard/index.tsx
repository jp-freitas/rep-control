import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { TableContent } from '../../components/TableContent';

import { Container, Content } from "./styles";

export function Dashboard() {

  return (
    <>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <TableContent />
        </Content>
      </Container>
    </>
  );
}