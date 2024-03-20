import {GoogleOAuthProvider} from '@react-oauth/google'
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '763202011488-otmrj2ds4q4omg2pu6bs3n6gkc1rr2aq.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider  clientId={clientId}>
    <AccountProvider>
      <Messenger />
    </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
