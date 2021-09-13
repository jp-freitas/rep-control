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
        <h1>REP-CONTROL</h1>
        <p>Control your maintenance history <br /> of biometric time clock!</p>
        <Button onClick={handleSignIn}>
          <FaGoogle />
          Login with Google!
        </Button>
        <p>Made by João Freitas with 💙 !</p>
      </Content>
    </Container>
  );
}