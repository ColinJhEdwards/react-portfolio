import { Switch, Route, useLocation } from "react-router-dom";
// import components
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Switch>
          <Nav />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="projects" exact>
            <Projects />
          </Route>
          <Route path="contact">
            <Contact />
          </Route>
        </Switch>
      </GlobalStyles>
    </div>
  );
}

export default App;
