import { useState } from "react";
import { Header } from "../../components/Header";
import { NewRepModal } from "../../components/NewRepModal";
import { TableContent } from "../TableContent";
import { Container, Content } from "./styles";

export function Dashboard() {
  const [isNewRepModalOpen, setIsNewRepModalOpen] = useState(false);

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
          <TableContent />
        </Content>
        <NewRepModal
          isOpen={isNewRepModalOpen}
          onRequestClose={handleCloseNewRepModal}
        />
      </Container>
    </>
  );
}