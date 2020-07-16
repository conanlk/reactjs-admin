import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './post/list';
import Form from './post/form';

class Post extends Component {

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

export default connect(mapStateToProps, null)(Post);
