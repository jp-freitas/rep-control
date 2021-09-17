import { Link, useParams } from "react-router-dom";
import { FiArrowLeftCircle } from 'react-icons/fi';

import { Container } from './styles';

type RepParams = {
  id: string;
}

export function Rep() {
  const params = useParams<RepParams>();
  const repId = params.id;

  return (
    <Container>
      <Link to="/dashboard">
        <FiArrowLeftCircle />
        Voltar
      </Link>
      <h1>{repId}</h1>
    </Container>
  );
}