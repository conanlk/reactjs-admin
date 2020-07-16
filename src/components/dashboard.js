import React, { Component } from 'react';
import Header from './../templates/header';
import Footer from './../templates/footer';
import Post from './post';
import User from './user';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Dashboard extends Component {
  render() {
    return <Router>
      <Header/>
      <div id="content">
        <Switch>
          <Route path="/" exact>
            <h1>Dashboard!</h1>
          </Route>
          <Route path="/pages">
            <Page />
          </Route>
          <Route path="/posts">
            <Post />
          </Route>
          <Route path="/users">
            <User />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>;
  }
}

export default Dashboard;
