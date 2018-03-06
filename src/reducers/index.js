import { reducer } from 'redux'
import {
  ADD_POST,
  DELETE_POST
} from '../actions'

function posts (state={}, action){
  const {title, body, author, category} = action

  switch (action.type) {
    case ADD_POST:
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
