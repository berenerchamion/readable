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
    return (
      <div className="App">
        Hey there Beren - got some data?
      </div>
    );
  }
}

export default App;
