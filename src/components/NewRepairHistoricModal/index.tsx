import { FormEvent, useState } from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { toast } from "react-toastify";
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
  const [date, setDate] = useState(String(Date()));
  const [description, setDescription] = useState('');
  const [situation, setSituation] = useState('');


  async function handleCreateRepairHistoric(event: FormEvent) {
    event.preventDefault();

    if ((date.trim() && description && situation) === '') {
      onRequestClose();
      toast.error('Nenhum dado preenchido!');
      return;
    }

    const repRef = database.ref(`reps/${id}/repair_history`);

    await repRef.push({
      date,
      description,
      situation,
    });

    onRequestClose();
    toast.success('Histórico cadastrado com sucesso!');
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
        <Input
          id="date"
          name="date"
          type="date"
          placeholder="Data"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <Input
          id="situation"
          name="situation"
          type="text"
          placeholder="Situação"
          value={situation}
          onChange={event => setSituation(event.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}