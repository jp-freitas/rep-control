import { FormEvent, useState } from 'react';
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
  const [role, setRole] = useState('atendee');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    console.log(nome, email, role, password, confirmPassword);

    onRequestClose();
  }

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
      <Container onSubmit={handleCreateUser}>
        <h2>Cadastrar Usuário</h2>
        <Input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={event => setNome(event.target.value)}
          required
        />
        <Input
          id="email"
          name="email"
          type="e-mail"
          placeholder="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <RoleContainer>
          <Button
            type="button"
            isActive={role === 'admin'}
            onClick={() => { setRole('admin') }}
          >
            Administrador
          </Button>
          <Button
            type="button"
            isActive={role === 'atendee'}
            onClick={() => { setRole('atendee') }}
          >
            Atendente
          </Button>
        </RoleContainer>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}