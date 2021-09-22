import { FiPlusCircle } from "react-icons/fi";
import { Button } from "../Button";
import { RepairHistory } from "../Rep";
import { Container, Content, Header } from "./styles";

interface RepairHistoryProps {
  currentRepRepairHistory: RepairHistory[];
  openModal: () => void;
}

export function RepRepairHistory({
  currentRepRepairHistory,
  openModal,
}: RepairHistoryProps) {
  return (
    <Container>
      <Header className="repair-header">
        <h2>Histórico de Reparo</h2>
        <Button onClick={openModal}>
          <FiPlusCircle />
          Adicionar
        </Button>
      </Header>
      <Content>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRepRepairHistory.map(history => (
            <tr key={history.id}>
              <td>{history.date}</td>
              <td>{history.description}</td>
              <td>{history.situation}</td>
            </tr>
          ))}
        </tbody>
      </Content>
    </Container>
  );
}