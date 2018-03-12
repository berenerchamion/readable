import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'

class EditPost extends Component{

  editPost = (e) => {
    e.preventDefault()
  }


  render(){
    const { post } = this.props
    return (
      <div className="editForm">
        <form onSubmit={this.submitEdit}>
          <h2>Edit Post {post.id}</h2>
          <ul className="form-style-1">
            <li>
              <label>Title</label>
              <input defaultValue={post.ttile} type="text" name="title" className="field-long" />
            </li>
            <li>
              <label>Content/Body:</label>
              <textarea defaultValue={post.body} type="text" name="body" className="textArea">
              </textarea>
            </li>
            <button>Update</button>
            <button>Cancel</button>
          </ul>
        </form>
      </div>
    )
  }

}

function mapStateToProps({ posts, }, { match }) {
  return {
    post: posts.filter((post) => match.params.id)
  }
}

export default connect(mapStateToProps, actions)(EditPost)
