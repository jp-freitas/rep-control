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
  const [internetProtocol, setInternetProtocol] = useState(0);
  const [serialNumber, setSerialNumber] = useState(0);

  async function handleCreateRep(event: FormEvent) {
    event.preventDefault();

    if ((local.trim() && internetProtocol && serialNumber) === '') {
      return;
    }

    const repRef = database.ref('reps');

    await repRef.push({
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
        <label htmlFor="local">Local</label>
        <Input
          id="local"
          name="local"
          type="text"
          value={local}
          onChange={event => setLocal(event.target.value)}
        />
        <label htmlFor="internet-protocol">Protocolo de Internet</label>
        <Input
          id="internet-protocol"
          name="internet-protocol"
          type="number"
          value={internetProtocol}
          onChange={event => setInternetProtocol(Number(event.target.value))}
        />
        <label htmlFor="serial-number">Número de Série</label>
        <Input
          id="serial-number"
          name="serial-number"
          type="number"
          value={serialNumber}
          onChange={event => setSerialNumber(Number(event.target.value))}
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}