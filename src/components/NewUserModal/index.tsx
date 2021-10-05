import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container, RoleContainer } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose }: ModalProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiX />
      </button>
      <Container>
        <h2>Cadastrar Usuário</h2>
        <Input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />
        <Input
          id="email"
          name="email"
          type="e-mail"
          placeholder="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <RoleContainer>
          <Button>Administrador</Button>
          <Button>Atendente</Button>
        </RoleContainer>
        <Input
          id="password"
          name="password"
          type="passowrd"
          placeholder="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Input
          id="password"
          name="password"
          type="passowrd"
          placeholder="Confirmar senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}