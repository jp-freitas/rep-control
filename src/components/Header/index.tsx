import { FiLogOut, FiPlusCircle, FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { Input } from '../Input';

import { Content } from './styles';

export function Header() {
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
        <Button onClick={handleLogout}>
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