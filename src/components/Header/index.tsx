import { useHistory } from 'react-router-dom';
import { FiLogOut, FiPlusCircle, FiSearch, FiUser } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { Input } from '../Input';

import { Content } from './styles';

interface HeaderProps {
  onOpenNewRepModal: () => void;
  onOpenNewUserModal: () => void;
}

export function Header({ onOpenNewRepModal, onOpenNewUserModal }: HeaderProps) {
  const { user, signOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await signOut();
    history.push('/');
  }

  return (
    <Content>
      <div className="user-group">
        <FiUser />
        <p>{user?.name}</p>
        {/* <Button isActive={false} onClick={onOpenNewUserModal}>
          <FiPlusCircle />
          Usuário
        </Button> */}
      </div>
      <div className="action-group">
        <Input name="search" icon={FiSearch} placeholder="Pesquisar por relógio" />
        <Button isActive={false} onClick={onOpenNewRepModal}>
          <FiPlusCircle />
          Relógio
        </Button>
        <Button isActive={false} onClick={handleLogout}>
          <FiLogOut />
          Sair
        </Button>
      </div>
    </Content>
  );
}