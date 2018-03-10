import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'

class AddPost extends Component{
  render(){
    const { categories } = this.props
    return(
      <div className="container">
        <div className="categories">
          Hey there - add something... from one of these categories:
          <ul className="category-list">
            {categories.map((category) => (
              <li>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className="add-post-form">
          This is where the form will go.
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categories }){
  return {
    categories: categories

  }
}

export default connect(mapStateToProps, actions) (AddPost)
