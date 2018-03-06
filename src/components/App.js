import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from 'react-loading'
import * as ReadableAPI from '../utils/ReadableAPI'
import { getPosts } from '../actions'

class App extends Component {

  state = {
    posts: [],
    randomBoolean: false
  }

  componentDidMount(){
    this.props.getPosts()
    this.setState(() => ({
      randomBoolean: true
    }))
  }

  render() {
    const { posts } = this.state
    return (
      <div className="App">
        <ul className="post-list">
          {posts.map((posts)=>(
            <li key={ posts.id } className="post-details">{ posts.title }, {posts.author}</li>
          ))}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPosts()
    {
      dispatch(getPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
