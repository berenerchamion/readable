import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from 'react-loading'
import * as ReadableAPI from '../utils/ReadableAPI'

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    ReadableAPI.getPosts().then((posts) => {
      this.setState({ posts })
    })
  }

  render() {
    const { posts } = this.state
    return (
      <div className="App">
        <ul className="post-list">
          {posts.map((posts)=>(
            <li className="post-details">{ posts.title }, {posts.author}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
