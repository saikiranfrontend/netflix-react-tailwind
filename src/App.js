
import { BrowserRouter} from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route} from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route path='/login'><Login></Login></Route>
          <Route path='/signup'><Signup></Signup></Route>
          <Route path='/account'><ProtectedRoute><Account></Account></ProtectedRoute></Route>
        </Switch>
      </AuthContextProvider>
    </>
  );
}

export default App;