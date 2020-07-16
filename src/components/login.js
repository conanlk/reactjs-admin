import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from './../constants/index';

class Login extends Component {

  onsubmit = (event) => {
    this.props.onlogin();
    event.preventDefault();
  }
  render() {
    let login = this.props.login;

    let errorElement = (login.error === '' ? '' :
      <div className="alert alert-warning">
        <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={this.onCloseAlert}>&times;</button>
        {login.error}
      </div>);

    return (
      <div className="col-md-4 offset-md-4">
        {errorElement}
        <form onSubmit={this.onsubmit} >
          <legend className="text-center"><strong>Login</strong></legend>
          <hr/>
          <div className="form-group">
            <label><strong>UserName</strong></label>
            <input type="text" className="form-control" name="username" required="required" onChange={(event) => { this.props.onchange(event) }} />
          </div>
          <div className="form-group">
            <label><strong>Password</strong></label>
            <input type="password" name="password" className="form-control" required="required" onChange={(event) => { this.props.onchange(event) }} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onlogin: () => {
      dispatch({
        type: types.LOGIN + types.SUBMIT,
      });
    },
    onchange: (event) => {
      dispatch({
        type: types.LOGIN + types.CHANGE,
        event, // event : event
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);