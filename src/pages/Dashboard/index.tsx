import { ListPage } from "../ListPage";
import { Container, Content } from "./styles";

export function Dashboard() {

  return (
    <>
      <Container>
        <Content>
          <ListPage />
        </Content>
      </Container>
    </>
  );
}