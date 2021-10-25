import React, { Fragment } from "react";
import axios from "axios";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
const App = () => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get("http://localhost:5500/api/notes");
      setNotes(data);
    };

    fetchNotes();
    console.log(notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard notes={notes} />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
