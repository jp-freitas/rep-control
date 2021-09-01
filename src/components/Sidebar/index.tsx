import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { Container } from './styles';

export function Sidebar() {
  const { user } = useAuth();

  return (
    <Container>
      {user?.name}
      <Button>
        <FiLogOut />
        Sair
      </Button>
    </Container>
  );
}