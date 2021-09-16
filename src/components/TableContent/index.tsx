import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../../services/firebase';
import { Container } from './styles';

type FirebaseReps = Record<string, {
  local: string;
  internet_protocol: number;
  serial_number: number;
}>

type Rep = {
  id: string;
  local: string;
  internet_protocol: number;
  serial_number: number;
}

export function TableContent() {
  const [reps, setReps] = useState<Rep[]>([]);

  useEffect(() => {
    const repRef = database.ref(`reps/`);

    repRef.on('value', rep => {
      const databaseRep = rep.val();
      const firebaseReps: FirebaseReps = databaseRep ?? {};
      const parsedReps = Object.entries(firebaseReps).map(([key, value]) => {
        return {
          id: key,
          local: value.local,
          internet_protocol: value.internet_protocol,
          serial_number: value.serial_number,
        }
      });
      setReps(parsedReps);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Local do Relógio</th>
            <th>Internet Protocol</th>
            <th>Número de Série</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {reps.map(rep => (
            <tr key={rep.id}>
              <td>{rep.local}</td>
              <td>{rep.internet_protocol}</td>
              <td>{rep.serial_number}</td>
              <td><Link to={`/rep/${rep.id}`}>Detalhes</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}