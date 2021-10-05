import { useState } from "react";

import { Header } from "../../components/Header";
import { NewRepModal } from "../../components/NewRepModal";
import { NewUserModal } from "../../components/NewUserModal";
import { Reps } from "../../components/Reps";

import { Container, Content } from "./styles";

export function Dashboard() {
  const [isNewRepModalOpen, setIsNewRepModalOpen] = useState(false);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);

  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true);
  }

  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false);
  }

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
          <Header
            onOpenNewRepModal={handleOpenNewRepModal}
            onOpenNewUserModal={handleOpenNewUserModal}
          />
          <Reps />
        </Content>
        <NewUserModal
          isOpen={isNewUserModalOpen}
          onRequestClose={handleCloseNewUserModal}
        />
        <NewRepModal
          isOpen={isNewRepModalOpen}
          onRequestClose={handleCloseNewRepModal}
        />
      </Container>
    </>
  );
}