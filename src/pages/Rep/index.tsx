import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiEdit2, FiPlusCircle } from 'react-icons/fi';

import { Container, Header, Content } from './styles';
import { database } from "../../services/firebase";
import { Button } from "../../components/Button";

type RepType = {
  id: string;
  local: string;
  internet_protocol: number;
  serial_number: number;
}

type RepParams = {
  id: string;
}

export function Rep() {
  const params = useParams<RepParams>();
  const repId = params.id;
  const [rep, setRep] = useState<RepType>();

  useEffect(() => {
    const repRef = database.ref(`reps/${repId}`);

    repRef.on('value', rep => {
      const databaseRep = rep.val();
      setRep(databaseRep);
    });
  }, [repId]);
  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FiArrowLeft />
        </Link>
        <h2>Informação do Relógio de Ponto Biométrico</h2>
        <Button>
          <FiEdit2 />
          Editar
        </Button>
      </Header>
      <Content>
        <table className="info">
          <thead>
            <tr>
              <th>Local</th>
              <th>Protocolo de Internet</th>
              <th>Número de Série</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{rep?.local}</td>
              <td>{rep?.internet_protocol}</td>
              <td>{rep?.serial_number}</td>
            </tr>
          </tbody>
        </table>
        <div className="repair-header">
          <h2>Histórico de Reparo</h2>
          <Button>
            <FiPlusCircle />
            Adicionar
          </Button>
        </div>
        <table className="repair">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>17/09/2021</td>
              <td>Atualização do Servidor de Gerenciamento</td>
              <td>Funcionando</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}