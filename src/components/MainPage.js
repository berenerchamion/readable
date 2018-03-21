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

  updateFilter = (e) => {
    this.setState({ cat: e.trim() })
  }

  clearFilter = () => {
    this.setState({cat: ''})
  }

  submitPostVote = (id, voteType) => {
    const postData = {
      id: id,
      voteType: voteType
    }
    this.props.voteForPost(postData)
    this.props.fetchAllPosts()
  }

  render() {
    const { posts } = this.props
    const { categories } = this.props
    const { cat } = this.state

    let displayedPosts
    let catLabel

    if (cat != ''){
      catLabel = cat
      displayedPosts = posts.filter((post) => (post.category === cat))
    }
    else{
      catLabel = 'all'
      displayedPosts = posts
    }

    return (
      <div className="container">
        <div className="current-category">
          <h2 className="section-title">Currently looking at {catLabel} posts:</h2>
        </div>
        <div className="categories">
          <ul className="category-list">
            <button key="all" value="all" onClick={(event) => this.clearFilter()}>All</button>
            {categories.map((category) => (
              <button key={category.name} value={category.name}
                onClick={(event) => this.updateFilter(event.target.value)}>{category.name}</button>
            ))}
          </ul>
        </div>
        <div className="posts">
          <ul className="post-list">
          {displayedPosts.map((post) => (
            <li className="post-details" key={post.id} >
              <Link to={`/${post.category}/${post.id}`}>
                { post.title }</Link> by { post.author }
                <Link className="edit-post" to={`/${post.category}/${post.id}/edit` }>
                    Edit Post
                </Link><br/>
              Category: { post.category }<br/>
            Popularity: { post.voteScore }
            <button className="vote-button" onClick={(event => this.submitPostVote(`${post.id}`, 'upVote'))}>+</button>
            <button onClick={(event => this.submitPostVote(`${post.id}`, 'downVote'))}>-</button>
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
