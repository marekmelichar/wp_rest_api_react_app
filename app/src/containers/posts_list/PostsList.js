import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import * as actions from '../../actions';

import Post from '../post/Post';

class PostsList extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let _this = this
    axios.get( `${ROOT_URL}/wp-json/wp/v2/posts` )
    .then(function (response) {
      _this.setState({ posts: response.data })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  renderPostsList() {
    let posts = this.state.posts

    return posts.map(post => {
      console.log(post);
      return(
        // <div key={post.id}>
        //   {/* <h1>{post.title.rendered.replace(/(<([^>]+)>)/ig,"")}</h1> */}
        //   {/* <p>{post.content.rendered.replace(/(<([^>]+)>)/ig,"")}</p> */}
        //   <h1>{post.title.rendered}</h1>
        //   <p>{post.content.rendered}</p>
        // </div>
        <Post key={post.id} title={post.title.rendered} content={post.content.rendered} />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderPostsList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(PostsList);
