import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container } from './styles';
import { database } from '../../services/firebase';
import { useRep } from '../../hooks/useRep';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}

export function EditRepModal({ isOpen, onRequestClose, id }: ModalProps) {
  const repId = id;
  const { rep } = useRep(repId);
  const [local, setLocal] = useState('');
  const [internetProtocol, setInternetProtocol] = useState(0);
  const [serialNumber, setSerialNumber] = useState(0);

  useEffect(() => {
    if (rep) {
      setLocal(rep.local);
      setInternetProtocol(rep.internet_protocol);
      setSerialNumber(rep.serial_number);
    }
  }, [rep, onRequestClose]);

  async function handleEditRep(event: FormEvent) {
    event.preventDefault();

    // if ((local.trim() && internetProtocol && serialNumber) === (rep?.local && rep.internet_protocol && rep.serial_number)) {
    //   onRequestClose();
    //   toast.error('Nenhum dado alterado!');
    //   return;
    // }

    const repRef = database.ref(`reps`).child(repId);

    await repRef.update({
      local: local,
      internet_protocol: internetProtocol,
      serial_number: serialNumber,
    });

    onRequestClose();
    toast.success('Relógio atualizado com sucesso!');
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
      <Container onSubmit={handleEditRep}>
        <h2>Editar Relógio</h2>
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
        <Button type="submit">Alterar</Button>
      </Container>
    </Modal>
  );
}