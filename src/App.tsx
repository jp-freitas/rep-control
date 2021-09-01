import { BrowserRouter, Route } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from './contexts/AuthContext';

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
