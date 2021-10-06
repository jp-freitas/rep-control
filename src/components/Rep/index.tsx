import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiEdit2 } from 'react-icons/fi';

import { Button } from "../Button";
import { NewRepairHistoricModal } from "../NewRepairHistoricModal";
import { RepRepairHistory } from "../RepRepairHistory";

import { Container, Header, Content } from './styles';
import { useRep } from "../../hooks/useRep";
import { EditRepModal } from "../EditRepModal";
import { FormatInternetProtocol } from "../../utils/FormatInternetProtocol";

type RepParams = {
  id: string;
}

export function Rep() {
  const params = useParams<RepParams>();
  const repId = params.id;
  const { rep } = useRep(repId);
  const [
    isNewRepairHistoricModalOpen,
    setIsNewRepairHistoricModalOpen
  ] = useState(false);

  const [isEditRepModalOpen, setIsEditRepModalOpen] = useState(false);

  function handleOpenEditRepModal() {
    setIsEditRepModalOpen(true);
  }

  function handleCloseEditRepModal() {
    setIsEditRepModalOpen(false);
  }

  function handleOpenNewRepairHistoricModal() {
    setIsNewRepairHistoricModalOpen(true);
  }

  function handleCloseNewRepairHistoricModal() {
    setIsNewRepairHistoricModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FiArrowLeft />
        </Link>
        <h2>Informação do Relógio de Ponto Biométrico</h2>
        <Button isActive={false} onClick={handleOpenEditRepModal}>
          <FiEdit2 />
          Editar
        </Button>
      </Header>
      <Content>
        <table className="info">
          <thead>
            <tr>
              <th>Local</th>
              <th>Protocolo de Internet</th>
              <th>Número de Série</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{rep.local}</td>
              <td>{FormatInternetProtocol(rep.internet_protocol)}</td>
              <td>{rep.serial_number}</td>
            </tr>
          </tbody>
        </table>
      </Content>
      <RepRepairHistory
        openModal={handleOpenNewRepairHistoricModal}
      />
      <EditRepModal
        isOpen={isEditRepModalOpen}
        onRequestClose={handleCloseEditRepModal}
        id={repId}
      />
      <NewRepairHistoricModal
        isOpen={isNewRepairHistoricModalOpen}
        onRequestClose={handleCloseNewRepairHistoricModal}
        id={repId}
      />
    </Container>
  );
}