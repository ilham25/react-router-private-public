// import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute
          restricted={true}
          component={LoginPage}
          path="/login"
          exact
        />
        <PrivateRoute component={Dashboard} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
