import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './page/list';
import Form from './page/form';

class Page extends Component {

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
    post: state.post,
  }
};

export default connect(mapStateToProps, null)(Page);
