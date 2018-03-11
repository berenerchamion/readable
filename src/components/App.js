import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Main from './MainPage'
import Post from './Post'
import { Link } from 'react-router-dom'
import {fetchAllCategories } from '../actions'
import AddPost from './AddPost'

class App extends Component {

  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount(){
    this.props.fetchAllCategories()
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="banner">House of Beor's Readable Project - need to fancy this up a bit later...</div>
          <div className="addPost"><Link className="addPost" to={`/add`}>Add Something</Link></div>
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/add" component={AddPost} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default withRouter (connect(mapStateToProps, {fetchAllCategories})(App))
