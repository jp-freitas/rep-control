import { useEffect, useState } from "react";
import { database } from "../../services/firebase";

import { Header } from "../../components/Header";
import { NewRepModal } from "../../components/NewRepModal";
import { Reps } from "../../components/Reps";
import { Pagination } from "../../components/Pagination";

import { Container, Content } from "./styles";

type FirebaseReps = Record<string, {
  local: string;
  internet_protocol: number;
  serial_number: number;
}>

export type Rep = {
  id: string;
  local: string;
  internet_protocol: number;
  serial_number: number;
}

export function Dashboard() {
  const [isNewRepModalOpen, setIsNewRepModalOpen] = useState(false);

  const [reps, setReps] = useState<Rep[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repsPerPage] = useState(7);
  const indexOfLastRep = currentPage * repsPerPage;
  const indexOfFirstRep = indexOfLastRep - repsPerPage;
  const currentReps = reps.slice(indexOfFirstRep, indexOfLastRep);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const repRef = database.ref(`reps/`);
    repRef.on('value', rep => {
      const databaseRep = rep.val();
      const firebaseReps: FirebaseReps = databaseRep ?? {};
      const parsedReps = Object.entries(firebaseReps).map(([key, value]) => {
        return {
          id: key,
          local: value.local,
          internet_protocol: value.internet_protocol,
          serial_number: value.serial_number,
        }
      });
      setReps(parsedReps);
    });
  }, []);

  function handleOpenNewRepModal() {
    setIsNewRepModalOpen(true);
  }

  function handleCloseNewRepModal() {
    setIsNewRepModalOpen(false);
  }

  return (
    <>
      <Container>
        <Content>
          <Header onOpenNewRepModal={handleOpenNewRepModal} />
          <Reps reps={currentReps} />
          <Pagination
            listPerPage={repsPerPage}
            listTotal={reps.length}
            paginate={paginate} />
        </Content>
        <NewRepModal
          isOpen={isNewRepModalOpen}
          onRequestClose={handleCloseNewRepModal}
        />
      </Container>
    </>
  );
}