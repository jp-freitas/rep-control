import { useHistory } from 'react-router-dom';

import { FaGoogle } from 'react-icons/fa'

import { Button } from '../../components/Button';
import { Container, Content } from './styles';
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
      <Content>
        <Button onClick={handleSignIn}>
          <FaGoogle />
          Login with google!
        </Button>
      </Content>
    </Container>
  );
}