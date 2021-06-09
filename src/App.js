import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

import SigIn from "./pages/sigin/sigin";
import SigUp from "./pages/sigup/sigup";

function Home() {
  return <h2>Home</h2>;
}

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/register" >
          <SigUp />
        </Route>
        <Route exact path="/sigin" >
          <SigIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
