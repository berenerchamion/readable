import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../actions'

class MainPage extends Component{
  static propTypes = {
    posts: PropTypes.array
  }

  state = {
    cat: ''
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  updateFilter = (filter) => {
    this.setState({cat: filter.trim() })
  }

  clearFilter = () => {
    this.setState({cat: ''})
  }

  render() {
    const { posts } = this.props
    const { categories } = this.props
    const { cat } = this.state

    let displayedPosts
    if (cat != ''){
      displayedPosts = posts.filter((post) => (post.category === cat))
    }
    else{
      displayedPosts = posts
    }
    return (
      <div className="container">
        <div className="categories">
          <ul className="category-list">
            <li key="all">All</li>
            {categories.map((category) => (
              <li key={category.name}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="posts">
          <ul className="post-list">
          {displayedPosts.map((post) => (
            <li className="post-details" key={post.id} >
              <Link to={`/post/${post.id}`}>
                Post: { post.title }
              </Link>,
              { post.category },
              { post.author },
              <Link className="edit-post" to={`/edit/${post.id}` }>
                Edit Post
              </Link>,
              </li>
          ))}
          </ul>
        </div>
      </div>
    )}
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    categories: state.categories
  }
}

export default connect(mapStateToProps, actions)(MainPage)
