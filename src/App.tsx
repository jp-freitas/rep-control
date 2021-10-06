import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { Rep } from './components/Rep';

import { AuthContextProvider } from './contexts/AuthContext';

import { GlobalStyle } from './styles/global';
import { PrivateRoute } from './components/PrivateRoute';

import { useAuth } from './hooks/useAuth';

Modal.setAppElement('#root');

export function App() {
  const { user } = useAuth();

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <PrivateRoute isAuthenticated={!user} authenticationPath="/" path="/dashboard" component={Dashboard} />
            <PrivateRoute isAuthenticated={!user} authenticationPath="/" path="/rep/:id" component={Rep} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        autoClose={2000}
      />
    </>
  );
}
