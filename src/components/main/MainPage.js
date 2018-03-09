import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../../actions'

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
          { post.title },
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
