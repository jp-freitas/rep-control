import { Content } from './styles';

export function Header() {
  return (
    <Content>
      <input type="text" placeholder="Pesquisar por relógio" />
      <div className="button-group">
        <button type="button">
          Relógio
        </button>
        <button type="button">
          Sair
        </button>
      </div>
    </Content>
  );
}