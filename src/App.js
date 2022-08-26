import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Scp3 } from "./components/Pages/scp3";
import { Scp4 } from "./components/Pages/scp4";
import { Scp5 } from "./components/Pages/scp5";
import { Scp6 } from "./components/Pages/scp6";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/scp3" component={Scp3} />
            <Route path="/scp4" component={Scp4} />
            <Route path="/scp5" component={Scp5} />
            <Route path="/scp6" component={Scp6} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
