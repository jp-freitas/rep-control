import { Link } from 'react-router-dom';
import { Rep } from '../../pages/Dashboard';
import { Container } from './styles';

interface RepProps {
  reps: Rep[];
}

export function Reps({ reps }: RepProps) {
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