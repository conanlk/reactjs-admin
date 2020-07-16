import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './user/list';
import Form from './user/form';

class User extends Component {

  render() {
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(User);
