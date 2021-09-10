import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';

import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from './contexts/AuthContext';

Modal.setAppElement('#root');

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
