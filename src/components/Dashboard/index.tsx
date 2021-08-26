import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container, Content } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
  );
}