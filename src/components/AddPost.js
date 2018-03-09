import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'

class AddPost extends Component{
  render(){
    return(
      <div className="addpost">
      Hey there - add something.
      </div>
    )
  }
}

function mapStateToProps({ posts }){
  return {

  }
}

export default connect(mapStateToProps, actions) (AddPost)
