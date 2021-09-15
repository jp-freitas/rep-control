import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';

import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { Rep } from './pages/Rep';

import { AuthContextProvider } from './contexts/AuthContext';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/rep/:id" component={Rep} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
