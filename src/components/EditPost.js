import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'

class EditPost extends Component{

  state = {
    postId: ''
  }

  editPost = (e) => {
    e.preventDefault()
    if (e.target.body.value ==="" || e.target.title.value =="")
      alert("Hey, you need a title and body")
    else {
      const postData = {
        id: this.state.postId,
        title: e.target.title.value,
        body: e.target.body.value
      }
      this.props.submitEdit(postData, () => this.props.history.push('/'))
    }
  }

  render(){
    const { post } = this.props
    let data
    //This is a little hacky...maybe lodash would help here
    for(var i=0; i < post.length; i++) {
        if(post && post[i].id){
          data = post[i]
          this.state.postId = data.id
        }
        else {
          () => this.props.history.push('/')
        }
    }

    return (
      <div className="editForm">
        <form onSubmit={this.editPost}>
          <h2>Edit Post {data.id}</h2>
          <ul className="form-style-1">
            <li>
              <label>Title</label>
              <input defaultValue={data.title} type="text" name="title" className="field-long" />
            </li>
            <li>
              <label>Content/Body:</label>
              <textarea defaultValue={data.body} type="text" name="body" className="textArea">
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

function mapStateToProps(state, { match }) {
  return {
    post: state.posts.filter((post) => (post.id === match.params.id))
  }
}

export default connect(mapStateToProps, actions)(EditPost)
