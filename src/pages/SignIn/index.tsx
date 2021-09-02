import { useHistory } from 'react-router-dom';

import { FaGoogle } from 'react-icons/fa'

import { Button } from '../../components/Button';
import { Container } from './styles';
import { useAuth } from '../../hooks/useAuth';

export function SignIn() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/dashboard');
  }

  return (
    <Container>
      <Button onClick={handleSignIn}>
        <FaGoogle />
        Login with Google!
      </Button>
    </Container>
  );
}