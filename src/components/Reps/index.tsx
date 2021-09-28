import { Link } from 'react-router-dom';
import { usePaginate } from '../../hooks/usePaginate';
import { useReps } from '../../hooks/useReps';
import { Pagination } from '../Pagination';
import { Container } from './styles';

export function Reps() {
  const { reps } = useReps();
  const {
    currentList,
    paginate,
    currentPage,
    itensPerPage,
  } = usePaginate(reps, 7);

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
          {currentList.map(rep => (
            <tr key={rep.id}>
              <td>{rep.local}</td>
              <td>{rep.internet_protocol}</td>
              <td>{rep.serial_number}</td>
              <td><Link to={`/rep/${rep.id}`}>Detalhes</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        listPerPage={itensPerPage}
        listTotal={reps.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
}