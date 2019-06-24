import React, {Component} from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar'
import {About} from './pages/About'
import Home from './pages/Home'
import Skills from './pages/Skills'
import {Education} from './pages/Education'
import {Contact} from './pages/Contact'
import {Layout} from './components/Layout'

function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Layout>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/education" component={Education}/>
            <Route path="/contact" component={Contact}/>
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
