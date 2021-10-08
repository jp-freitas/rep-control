import { FiPlusCircle } from "react-icons/fi";
import { useParams } from "react-router";

import { useRep } from "../../hooks/useRep";
import { FormatDate } from "../../utils/FormatDate";

import { Button } from "../Button";
import { Container, Content, Header } from "./styles";

interface RepairHistoryProps {
  openModal: () => void;
}

type RepParams = {
  id: string;
}

export function RepRepairHistory({
  openModal,
}: RepairHistoryProps) {
  const params = useParams<RepParams>();
  const repId = params.id;
  const { repRepairHistory } = useRep(repId);

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
          {repRepairHistory.map(history => (
            <tr key={history.id}>
              <td>{FormatDate(history.date)}</td>
              <td>{history.description}</td>
              <td>{history.situation}</td>
            </tr>
          ))}
        </tbody>
      </Content>
    </Container>
  );
}