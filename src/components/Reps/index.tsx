import { Link } from 'react-router-dom';
import { useReps } from '../../hooks/useReps';
import { Container } from './styles';

export function Reps() {
  const { reps } = useReps();

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