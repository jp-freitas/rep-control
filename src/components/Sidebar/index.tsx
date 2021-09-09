import { FiList, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { Container } from './styles';

export function Sidebar() {
  const { user, signOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await signOut();
    history.push('/');
  }

  return (
    <Container>
      <div className="user-group">
        <img src={user?.avatar} alt="Foto do Usuário" />
        <p>{user?.name}</p>
      </div>
      <div className="navigation-group">
        <Link to="#table-content">
          <FiList />
          Listar
        </Link>
        <Link to="#">
          <FiPlusCircle />
          Cadastrar
        </Link>
      </div>
      <Button onClick={handleLogout}>
        <FiLogOut />
        Sair
      </Button>
    </Container>
  );
}