import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'


class Post extends Component{

  componentWillMount(){
  }

  render(){
    var posts = this.props.post
    console.log(posts)
    var post = posts.pop()
    console.log(post)
    return(
      <div className="container-post">
        <div className="single-post">
          <ul className="post-details">
            <li className="post-header">{post.title} by {post.author} on {post.timestamp}</li>
            <li className="post-category">Topic: {post.category}</li>
            <li className="post-body">{post.body}</li>
          </ul>
        </div>
        <div className="post-comments">
          This is where a comment should be!
        </div>

      </div>
    )
  }
}

function mapStateToProps(state, { match }) {
  return {
    post: state.posts.filter((post) => (post.id === match.params.id))
  }
}

export default connect(mapStateToProps, actions) (Post)
