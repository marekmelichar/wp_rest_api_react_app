import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import PostsList from './posts_list/PostsList';

class App extends Component {
  render() {
    return (
      <div>
        <PostsList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(App);
