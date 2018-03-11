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
    const { categories } = this.props
    return (
      <div className="container">
        <div className="categories">
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.name}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="posts">
          <ul className="post-list">
          {posts.map((post) => (
            <li className="post-details" key={post.id} >
              <Link to={`/post/${post.id}`}>
                Post: { post.title }
              </Link>,
              { post.category },
              { post.id },
              { post.author }</li>
          ))}
          </ul>
        </div>
      </div>
    )}
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: posts,
    categories: categories
  }
}

export default connect(mapStateToProps, actions)(MainPage)
