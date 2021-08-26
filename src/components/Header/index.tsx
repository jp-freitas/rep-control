import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <input type="text" placeholder="Pesquisar por relógio" />
        <button type="button">
          Relógio
        </button>
      </Content>
    </Container>
  );
}