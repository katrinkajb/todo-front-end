import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
// import PrivateRoute from './components/PrivateRoute.js';
import Home from './Home/Home.js';
import SignUpPage from './AuthPages/SignUpPage.js';
import LoginPage from './AuthPages/LoginPage.js';
import ToDoPage from './TodoPage/TodoPage.js';

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