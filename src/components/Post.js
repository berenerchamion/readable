import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'


class Post extends Component{

  componentWillMount(){
    console.log(this.props.match.params.id)
    this.props.fetchOnePost(this.props.match.params.id)
  }

  render(){
    const { post } = this.props
    console.log(post)
    return(
      <div className="single-post">
      <ul className="post-details">
        <li className="post-header">{post.title} by {post.author} on {post.timestamp}</li>
        <li className="post-category">Topic: {post.category}</li>
        <li className="post-body">{post.body}</li>
        <li></li>
      </ul>
      </div>
    )
  }
}

function mapStateToProps({ posts }){
  return {
    post: posts
  }
}

export default connect(mapStateToProps, actions) (Post)
