import './App.css';
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signup from './components/signup/Signup';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
