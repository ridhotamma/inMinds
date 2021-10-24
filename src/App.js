import { Fragment } from "react";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
