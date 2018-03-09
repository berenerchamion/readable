import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Main from './main/MainPage'

class App extends Component {

  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount(){
  }

  render() {
    //const { posts } = this.props
    return (
      <div className="App">
        <div className="header">
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    )
  }
}

export default withRouter (connect()(App))
