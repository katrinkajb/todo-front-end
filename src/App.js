import React, { Component } from 'react';

import Header from './components/Header.js';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
            <Switch>
              <Route 
                path="/" 
                exact
                render={(routerProps) => <Home {...routerProps} />} 
              />
              <Route 
                path="/signup" 
                exact
                render={(routerProps) => <SignUpPage {...routerProps} />} 
              />
              <Route 
                path="/login" 
                exact
                render={(routerProps) => <LoginPage {...routerProps} />} 
              />
              <Route 
                path="/todos" 
                exact
                render={(routerProps) => <ToDoPage {...routerProps} />} 
              />
            </Switch>
          </Router>
      </div>
    );
  }
}