import { FormEvent, useState } from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { database } from "../../services/firebase";

import { Button } from "../Button";
import { Input } from "../Input";

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}

export function NewRepairHistoricModal({ isOpen, onRequestClose, id }: ModalProps) {
  const [date, setDate] = useState(String(new Date()));
  const [description, setDescription] = useState('');
  const [situation, setSituation] = useState('');


  async function handleCreateRepairHistoric(event: FormEvent) {
    event.preventDefault();

    if ((date.trim() && description && situation) === '') {
      return;
    }

    const repRef = database.ref(`reps/${id}/repair_history`);

    await repRef.push({
      date,
      description,
      situation,
    });

    onRequestClose();
    setDate('');
    setDescription('');
    setSituation('');
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
      <Container onSubmit={handleCreateRepairHistoric}>
        <h2>Cadastrar Histórico de Reparo</h2>
        <label htmlFor="date">Data</label>
        <Input
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
        <label htmlFor="description">Descrição</label>
        <Input
          id="description"
          name="description"
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <label htmlFor="situation">Situação</label>
        <Input
          id="situation"
          name="situation"
          type="text"
          value={situation}
          onChange={event => setSituation(event.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}