import { FiSearch } from 'react-icons/fi';
import { Input } from '../Input';

import { Content } from './styles';

export function Header() {
  return (
    <Content>
      <Input name="search" icon={FiSearch} placeholder="Pesquisar por relógio" />
    </Content>
  );
}