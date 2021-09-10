import { useHistory } from 'react-router-dom';
import { FiLogOut, FiPlusCircle, FiSearch } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { Input } from '../Input';

import { Content } from './styles';

interface HeaderProps {
  onOpenNewRepModal: () => void;
}

export function Header({ onOpenNewRepModal }: HeaderProps) {
  const { user, signOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await signOut();
    history.push('/');
  }

  return (
    <Content>
      <div className="user-group">
        <img src={user?.avatar} alt="Foto do Usuário" />
        <p>{user?.name}</p>
      </div>
      <div className="action-group">
        <Input name="search" icon={FiSearch} placeholder="Pesquisar por relógio" />
        <Button onClick={onOpenNewRepModal}>
          <FiPlusCircle />
          Cadastrar
        </Button>
        <Button onClick={handleLogout}>
          <FiLogOut />
          Sair
        </Button>
      </div>
    </Content>
  );
}