import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link, Redirect } from 'react-router-dom'

class Post extends Component{

  state = {
    comments: [ ]
  }

  componentWillMount(){
    this.props.fetchPostComments(this.props.postId)
  }

  submitPostVote = (id, voteType) => {
    const postData = {
      id: id,
      voteType: voteType
    }
    this.props.voteForPost(postData)
    this.props.fetchAllPosts()
  }

  submitCommentVote = (postId, commentId, voteType) => {
    const postData = {
      postId: postId,
      commentId: commentId,
      voteType: voteType
    }
    this.props.voteForComment(postData)
    this.props.fetchPostComments()
  }

  render(){
    var posts = this.props.post
    var post = posts.pop()
    var comments = this.props.comments[this.props.postId]

    if (!post){
      return (
      <Redirect to={{ pathname: '/'}}/>
      )
    }
    else{
      return(
        <div className="container-post">
          <div className="single-post">
            <h2 className="section-title">Post Details: </h2>
            <ul className="post-details">
              <li className="post-header">{post.title} by {post.author} on {post.timestamp}</li>
              <li className="post-category">Topic: {post.category}</li>
              <li className="post-votes">Votes: {post.voteScore}
                <button className="vote-button" onClick={(event => this.submitPostVote(`${post.id}`, 'upVote'))}>+</button>
                <button onClick={(event => this.submitPostVote(`${post.id}`, 'downVote'))}>-</button>
              </li>
              <li className="post-body">{post.body}</li>
            </ul>
          </div>
          {comments &&
            <div className="post-comments">
              <h2 className="section-title">Comments: </h2>
              <ul className="comment-list">
                {comments.map((comment) => (
                  <li key={comment.id} className="comment">{comment.author} Votes: {comment.voteScore}
                    <button className="vote-button" onClick={(event => this.submitCommentVote(`${post.id}`, `${comment.id}`, 'upVote'))}>+</button>
                    <button onClick={(event => this.submitCommentVote(`${post.id}`, `${comment.id}`, 'downVote'))}>-</button>
                    <br/>
                  {comment.body} </li>
                ))}
              </ul>
            </div>
          }
        </div>
      )
    }
  }
}

function mapStateToProps(state, { match }) {
  return {
    post: state.posts.filter((post) => (post.id === match.params.id)),
    postId: match.params.id,
    comments: state.comments
  }
}

export default connect(mapStateToProps, actions) (Post)
