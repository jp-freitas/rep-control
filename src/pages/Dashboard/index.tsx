import { useState } from "react";

import { Header } from "../../components/Header";
import { NewRepModal } from "../../components/NewRepModal";
import { Reps } from "../../components/Reps";
// import { Pagination } from "../../components/Pagination";

import { Container, Content } from "./styles";
// import { useReps } from "../../hooks/useReps";

export function Dashboard() {
  const [isNewRepModalOpen, setIsNewRepModalOpen] = useState(false);
  // const { reps } = useReps();

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
          <Reps />
          {/* <Pagination
            listPerPage={repsPerPage}
            listTotal={reps.length}
            paginate={paginate}
            currentPage={currentPage}
          /> */}
        </Content>
        <NewRepModal
          isOpen={isNewRepModalOpen}
          onRequestClose={handleCloseNewRepModal}
        />
      </Container>
    </>
  );
}