import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";
import Detail from "./components/detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
