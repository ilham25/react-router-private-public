// import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
      </Switch>
    </Router>
  );
}

export default App;
