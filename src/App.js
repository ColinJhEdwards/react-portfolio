import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import components
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MyNav from "./components/Nav";
import Footer from "./components/Footer";
import { ProjectData } from "./util/data";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const location = useLocation();
  const [data, setData] = useState(ProjectData);

  return (
    <div className="App">
      <GlobalStyles />
      <MyNav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          {data.map((project) => (
            <Route path={`/project/${project.id}`}>
              <ProjectDetails
                title={project.title}
                description={project.Description}
                img={project.img}
              />
            </Route>
          ))}
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
