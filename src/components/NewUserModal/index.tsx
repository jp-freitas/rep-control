import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose }: ModalProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
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
        <label htmlFor="nome">Nome</label>
        <Input
          id="nome"
          name="nome"
          type="text"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />
        <label htmlFor="email">E-mail</label>
        <Input
          id="email"
          name="email"
          type="e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          name="password"
          type="passowrd"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <label htmlFor="password">Confirmar senha</label>
        <Input
          id="password"
          name="password"
          type="passowrd"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}