import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Main from './MainPage'
import Post from './Post'

class App extends Component {

  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          House of Beor's Readable Project - need to fancy this up a bit later...
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </div>
    )
  }
}

export default withRouter (connect()(App))
