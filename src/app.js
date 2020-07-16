import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';
import Login from './components/login';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    let element = this.props.login.status ? <Dashboard /> : <Login />;
    return (
      <div className="wrapper">
          {element}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
};

export default connect(mapStateToProps, null)(App);
