import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";
import Detail from "./components/detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Calender</h1>
      <Dashboard />
    </div>
  );
}

export default App;
