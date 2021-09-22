import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiEdit2 } from 'react-icons/fi';

import { database } from "../../services/firebase";

import { Button } from "../Button";
import { NewRepairHistoricModal } from "../NewRepairHistoricModal";
import { Pagination } from "../Pagination";
import { RepRepairHistory } from "../RepRepairHistory";

import { Container, Header, Content } from './styles';

type RepType = {
  id: string;
  local: string;
  internet_protocol: number;
  serial_number: number;
  repair_history: FirebaseRepairHistory;
}

export type RepairHistory = {
  id: string;
  date: Date;
  description: string;
  situation: string;
}

type FirebaseRepairHistory = Record<string, {
  date: Date;
  description: string;
  situation: string;
}>;

type RepParams = {
  id: string;
}

export function Rep() {
  const params = useParams<RepParams>();
  const repId = params.id;
  const [rep, setRep] = useState<RepType>();
  const [repRepaiHistory, setRepRepairHistory] = useState<RepairHistory[]>([]);
  const [
    isNewRepairHistoricModalOpen,
    setIsNewRepairHistoricModalOpen
  ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [repsPerPage] = useState(4);
  const indexOfLastRep = currentPage * repsPerPage;
  const indexOfFirstRep = indexOfLastRep - repsPerPage;
  const currentRepRepairHistory =
    repRepaiHistory.slice(indexOfFirstRep, indexOfLastRep);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  function handleOpenNewRepairHistoricModal() {
    setIsNewRepairHistoricModalOpen(true);
  }

  function handleCloseNewRepairHistoricModal() {
    setIsNewRepairHistoricModalOpen(false);
  }

  useEffect(() => {
    const repRef = database.ref(`reps/${repId}`);
    const repRepairHistoryRef = database.ref(`reps/${repId}/repair_history`);

    repRef.once('value', rep => {
      const databaseRep = rep.val();
      setRep(databaseRep);
    });

    repRepairHistoryRef.on('value', repRH => {
      const databaseRepairHistory = repRH.val();
      const firebaseRepairHistory: FirebaseRepairHistory = databaseRepairHistory ?? {};
      const parsedRepairHistory = Object.entries(firebaseRepairHistory).map((
        [key, value]) => {
        return {
          id: key,
          date: value.date,
          description: value.description,
          situation: value.situation,
        }
      });
      setRepRepairHistory(parsedRepairHistory);
    });
  }, [repId]);

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FiArrowLeft />
        </Link>
        <h2>Informação do Relógio de Ponto Biométrico</h2>
        <Button>
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
              <td>{rep?.local}</td>
              <td>{rep?.internet_protocol}</td>
              <td>{rep?.serial_number}</td>
            </tr>
          </tbody>
        </table>
      </Content>
      <RepRepairHistory
        currentRepRepairHistory={currentRepRepairHistory}
        openModal={handleOpenNewRepairHistoricModal}
      />
      <Pagination
        repsPerPage={repsPerPage}
        paginate={paginate}
        totalReps={repRepaiHistory.length}
      />
      <NewRepairHistoricModal
        isOpen={isNewRepairHistoricModalOpen}
        onRequestClose={handleCloseNewRepairHistoricModal}
        id={repId}
      />
    </Container>
  );
}