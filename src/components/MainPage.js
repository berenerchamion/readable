import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../actions'

class MainPage extends Component{
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  render() {
    const { posts } = this.props
    return <div>
      <ul className="post-list">
      {posts.map((post)=>(
        <li key={ post.id } className="post-details">
          <Link to={`/post/${post.id}`}>
            { post.title }
          </Link>,
          { post.category },
          { post.id },
          { post.author }</li>
      ))}
    </ul>
      </div>
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: posts
  }
}

export default connect(mapStateToProps, actions)(MainPage)
