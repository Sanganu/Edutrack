import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSection from "./pages/Quiz/MainSection";

import NoMatch from "./pages/Static/NoMatch";
import Nav from "./components/Navbar";
const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainSection} />
        <Route exact path="/score" component={MainSection} />
        <Route exact path="/score/:id" component={MainSection} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;
export default App;
