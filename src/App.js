// import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import RegisterPage from "./components/RegisterPage";

function App() {
  // const [isLogin, setLogin] = useState(false);
  return (
    <Router>
      <Switch>
        <PublicRoute
          restricted={true}
          component={LoginPage}
          path="/login"
          exact
        />
        <PublicRoute
          restricted={true}
          component={RegisterPage}
          path="/register"
          exact
        />
        <PrivateRoute component={Dashboard} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
