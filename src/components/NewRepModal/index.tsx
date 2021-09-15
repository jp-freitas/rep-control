import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container } from './styles';
import { database } from '../../services/firebase';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRepModal({ isOpen, onRequestClose }: ModalProps) {
  const [local, setLocal] = useState('');
  const [internetProtocol, setInternetProtocol] = useState(Number());
  const [serialNumber, setSerialNumber] = useState(Number());

  async function handleCreateRep(event: FormEvent) {
    event.preventDefault();

    if ((local.trim() && internetProtocol && serialNumber) === '') {
      return;
    }

    const repRef = database.ref('reps');

    const firebaseRep = await repRef.push({
      local: local,
      internet_protocol: internetProtocol,
      serial_number: serialNumber,
    });

    onRequestClose();
    setLocal('');
    setInternetProtocol(Number());
    setSerialNumber(Number());
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
      <Container onSubmit={handleCreateRep}>
        <h2>Cadastrar Relógio</h2>
        <Input
          name="local"
          type="text"
          placeholder="Local do Relógio"
          value={local}
          onChange={event => setLocal(event.target.value)}
        />
        <Input
          name="ip"
          type="number"
          placeholder="IP"
          value={internetProtocol}
          onChange={event => setInternetProtocol(Number(event.target.value))}
        />
        <Input
          name="serial-number"
          type="number"
          placeholder="Número de Série"
          value={serialNumber}
          onChange={event => setSerialNumber(Number(event.target.value))}
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}