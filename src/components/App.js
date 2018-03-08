import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from 'react-loading'
import PropTypes from 'prop-types'
import * as ReadableAPI from '../utils/ReadableAPI'
import { getAllPosts } from '../actions'

class App extends Component {

  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  state = {
    randomBoolean: false
  }

  componentDidMount(){
    ReadableAPI.fetchPosts().then(p => { this.props.getPosts(p) })
  }

  render() {
    const { posts } = this.props
    return (
      <div className="App">
        <ul className="post-list">
        {posts.map((post)=>(
          <li key={ post.id } className="post-details">{ post.title }, {post.author}</li>
        ))}
      </ul>
      </div>
    )
  }
}

function mapStateToProps({ posts }){
  return {
    posts: posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (p) => dispatch(getAllPosts(p))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
