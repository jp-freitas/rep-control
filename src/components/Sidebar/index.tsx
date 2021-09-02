import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { Container } from './styles';

export function Sidebar() {
  const { user, signOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await signOut();
    history.push('/signin');
  }

  return (
    <Container>
      <div>
        <img src={user?.avatar} alt="Foto do Usuário" />
        <p>{user?.name}</p>
      </div>
      <Button onClick={handleLogout}>
        <FiLogOut />
        Sair
      </Button>
    </Container>
  );
}