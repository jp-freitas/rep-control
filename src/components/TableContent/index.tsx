import { Link } from 'react-router-dom';
import { database } from '../../services/firebase';
import { Container } from './styles';

export function TableContent() {
  const repRef = database.ref(`reps`);

  console.log(repRef.child);

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
          <tr>
            <td>Palácio Castelo Branco</td>
            <td>192.168.210.70</td>
            <td>4004330081158</td>
            <td><Link to={`/rep/:id`}>Detalhes</Link></td>
          </tr>
          <tr>
            <td>Palácio Castelo Branco</td>
            <td>192.168.210.70</td>
            <td>4004330081158</td>
            <td>Mais</td>
          </tr>
          <tr>
            <td>Palácio Castelo Branco</td>
            <td>192.168.210.70</td>
            <td>4004330081158</td>
            <td>Mais</td>
          </tr>
          <tr>
            <td>Palácio Castelo Branco</td>
            <td>192.168.210.70</td>
            <td>4004330081158</td>
            <td>Mais</td>
          </tr>
          <tr>
            <td>Palácio Castelo Branco</td>
            <td>192.168.210.70</td>
            <td>4004330081158</td>
            <td>Mais</td>
          </tr>
          <tr>
            <td>Palácio Castelo Branco</td>
            <td>192.168.210.70</td>
            <td>4004330081158</td>
            <td>Mais</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}