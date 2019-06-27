import React, {Component} from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import {Education} from './pages/Education'
import Project from './pages/Project'

function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/education" component={Education}/>
          <Route path="/projects" component={Project}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
