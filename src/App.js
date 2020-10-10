import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Timeline from './Timeline';

import './App.css';

function App() {
  return (
    <HashRouter style={{width: '100%'}}  basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/experiences" component={Timeline}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
