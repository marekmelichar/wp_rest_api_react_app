import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';


class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* <div>{this.props.content}</div> */}
        <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(Post);
