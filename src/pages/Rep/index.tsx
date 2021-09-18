import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Header, Content } from './styles';
import { database } from "../../services/firebase";

type RepType = {
  id: string;
  local: string;
  internet_protocol: number;
  serial_number: number;
}

type RepParams = {
  id: string;
}

export function Rep() {
  const params = useParams<RepParams>();
  const repId = params.id;
  const [rep, setRep] = useState<RepType>();

  useEffect(() => {
    const repRef = database.ref(`reps/${repId}`);

    repRef.on('value', rep => {
      const databaseRep = rep.val();
      setRep(databaseRep);
    });
  }, [repId]);
  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <FiArrowLeft />
        </Link>
        <h1>Information of Biometric Time Clock</h1>
      </Header>
      <Content>
        <div className="group">
          <h2>Local</h2>
          <p>{rep?.local}</p>
        </div>
        <div className="group">
          <h2>Internet Protocol</h2>
          <p>{rep?.internet_protocol}</p>
        </div>
        <div className="group">
          <h2>Serial Number</h2>
          <p>{rep?.serial_number}</p>
        </div>
      </Content>
    </Container>
  );
}