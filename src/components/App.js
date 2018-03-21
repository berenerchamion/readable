import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Link, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { fetchAllCategories } from '../actions'
import { fetchAllPosts } from '../actions'
import Main from './MainPage'
import Post from './Post'
import AddPost from './AddPost'
import EditPost from './EditPost'
import NewComment from './NewComment'

class App extends Component {

  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount(){
    this.props.fetchAllCategories()
    this.props.fetchAllPosts()
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="banner"><Link className="link-home" to={`/`}>House of Beor's Readable Project</Link> - need to fancy this up a bit later...</div>
          <div className="add-post"><Link className="add-post" to={`/add`}>Add Something</Link></div>
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:category/:id" component={Post} />
          <Route exact path="/:category/:post/newcomment" component={NewComment} />
          <Route exact path="/add" component={AddPost} />
          <Route path="/:category/:postId/edit" component={EditPost} />
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

export default withRouter (connect(mapStateToProps, {fetchAllCategories, fetchAllPosts})(App))
