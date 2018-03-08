import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from 'react-loading'
import * as ReadableAPI from '../utils/ReadableAPI'
import { getAllPosts } from '../actions'

class App extends Component {

  state = {
    posts: [],
    randomBoolean: false
  }

  componentDidMount(){
    //this.props.getPosts()
    ReadableAPI.fetchPosts().then(p => { this.props.getPosts(p) })
    this.setState(() => ({
      randomBoolean: true
    }))
  }

  render() {
    const { posts } = this.props
    console.log(posts)
    return (
      <div className="App">
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (p) => dispatch(getAllPosts(p))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
