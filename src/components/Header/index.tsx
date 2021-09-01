import { FiSearch, FiPlusCircle } from 'react-icons/fi';
import { Button } from '../Button';
import { Input } from '../Input';

import { Content } from './styles';

export function Header() {
  return (
    <Content>
      <Input name="search" icon={FiSearch} placeholder="Pesquisar por relógio" />
      <div className="button-group">
        <Button className="add-rep">
          <FiPlusCircle />
          Relógio
        </Button>
      </div>
    </Content>
  );
}