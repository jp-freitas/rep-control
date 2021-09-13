import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRepModal({ isOpen, onRequestClose }: ModalProps) {
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
        <h2>Cadastrar Relógio</h2>

        <Input name="local" type="text" placeholder="Local do Relógio" />
        <Input name="ip" type="number" placeholder="IP" />
        <Input name="serial-number" type="number" placeholder="Número de Série" />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}