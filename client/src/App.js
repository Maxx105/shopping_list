import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import CreateList from "./pages/CreateList";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <UnPrivateRoute path="/login" component={Login}></UnPrivateRoute>
          <PrivateRoute path="/lists/:id" component={Lists}></PrivateRoute>
          <PrivateRoute path="/createlist" component={CreateList}></PrivateRoute>
          <UnPrivateRoute path="/signup" component={Signup}></UnPrivateRoute>
          <Route path="*" component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
