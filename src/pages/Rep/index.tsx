import { Link, useParams } from "react-router-dom";

type RepParams = {
  id: string;
}

export function Rep() {
  const params = useParams<RepParams>();
  const repId = params.id;

  return (
    <>
      <h1>Rep{repId}</h1>
      <Link to="/dashboard">Voltar</Link>
    </>
  );
}