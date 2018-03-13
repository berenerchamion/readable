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
    let data
    for(var i=0; i < post.length; i++) {
        if(post && post[i].id){
          data = post[i]
        }
        //houston we have a problem
    }


    return (
      <div className="editForm">
        <form onSubmit={this.submitEdit}>
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
  console.log(state.posts)
  console.log(match.params.id)
  return {
    //post: _.find(posts, { id: match.params.id }),
    post: state.posts.filter((post) => (post.id === match.params.id))
  }
}

export default connect(mapStateToProps, actions)(EditPost)
