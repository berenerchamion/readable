import { reducer } from 'redux'
import { fetchPosts } from '../utils/ReadableAPI'
import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST
} from '../actions'

function posts (state= [], action){
  const {posts} = action

  switch (action.type) {
    case ADD_POST:
      return {
      }
    case GET_POSTS:
      return { ...state,
        posts: action.posts
      }
    case DELETE_POST:
      return {

      }
    default:
      return state
  }
}

export default posts
