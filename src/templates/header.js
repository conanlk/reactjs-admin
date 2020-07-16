import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as types from './../constants/index';

class Header extends Component {

  render() {
    let header = this.props.header;

    return <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Admin Reactjs</h3>
      </div>
      <ul className="list-unstyled components">
        <li className={header.component === types.DASHBOARD ? "active" : ""}><Link to="/" onClick={() => this.props.onchange(types.DASHBOARD)}>Home</Link></li>
        <li className={header.component === types.PAGE ? "active" : ""}><Link to="/pages" onClick={() => this.props.onchange(types.PAGE)}>Pages</Link></li>
        <li className={header.component === types.POST ? "active" : ""}><Link to="/posts" onClick={() => this.props.onchange(types.POST)}>Posts</Link></li>
        <li className={header.component === types.USER ? "active" : ""}><Link to="/users" onClick={() => this.props.onchange(types.USER)}>Users</Link></li>
      </ul>
    </nav>;
  }
}

const mapStateToProps = (state) => {
  return {
    header: state.header
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
      onchange: (component) => {
        dispatch({
            type: types.DASHBOARD + types.CHANGE,
            component,
        });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);