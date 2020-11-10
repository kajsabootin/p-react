import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Welcome } from "./welcome/Welcome";
import { Work } from "./work/Work";
import { Projects } from "./projects/Projects";
import { Tech } from "./tech/Tech";

export const Home = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Nav/>
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>

      <Route path="/work" exact>
        <Work />
      </Route>

      <Route path="/projects" exact>
        <Projects />
      </Route>

      <Route path="/tech" exact>
        <Tech />
      </Route>
    
      </Switch>
    <Footer/>
    </BrowserRouter>
  )
}