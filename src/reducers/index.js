import { reducer } from 'redux'
import { api } from '../utils/ReadableAPI'
import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST
} from '../actions'

function posts (state={}, action){
  const {title, body, author, category} = action

  switch (action.type) {
    case ADD_POST:
      return {
      }
    case GET_POSTS:
      console.log('Got to teh reducer ok!')
      return {

      }
    case DELETE_POST:
      return {

      }
    default:
      return state
  }
}

export default posts
