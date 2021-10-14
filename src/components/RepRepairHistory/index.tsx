import { FiPlusCircle } from "react-icons/fi";
import { useParams } from "react-router";

import { useRep } from "../../hooks/useRep";
import { useRepairHistoryPaginate } from "../../hooks/useRepairHistoryPaginate";
import { FormatDate } from "../../utils/FormatDate";

import { Button } from "../Button";
import { Pagination } from "../Pagination";
import { Print } from "../Print";
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
  const {
    currentList,
    paginate,
    currentPage,
    itensPerPage,
  } = useRepairHistoryPaginate(repRepairHistory, 7);


  return (
    <Container>
      <Header className="repair-header">
        <h2>Histórico de Reparo</h2>
        <div>
          <Print id={repId} />
          <Button onClick={openModal}>
            <FiPlusCircle />
            Adicionar
          </Button>
        </div>
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
          {currentList.map(history => (
            <tr key={history.id}>
              <td>{FormatDate(history.date)}</td>
              <td>{history.description}</td>
              <td>{history.situation}</td>
            </tr>
          ))}
        </tbody>
      </Content>
      <Pagination
        listPerPage={itensPerPage}
        listTotal={repRepairHistory.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
}