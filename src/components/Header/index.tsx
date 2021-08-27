import { FiSearch, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { Button } from '../Button';
import { Input } from '../Input';

import { Content } from './styles';

export function Header() {
  return (
    <Content>
      <Input name="search" icon={FiSearch} placeholder="Pesquisar por relógio" />
      <div className="button-group">
        <Button>
          <FiPlusCircle />
          Relógio
        </Button>
        <Button>
          <FiLogOut />
          Sair
        </Button>
      </div>
    </Content>
  );
}