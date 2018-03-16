import {
        FETCH_COMMENTS,
        ADD_COMMENT,
        EDIT_COMMENT,
        DELETE_COMMENT
        } from '../actions'

function comments(state={}, action) {
  const { comments } = action
  switch(action.type) {
    case FETCH_COMMENTS:
      return state.comments
    case ADD_COMMENT:
      return state
    case EDIT_COMMENT:
      return state
    case DELETE_COMMENT:
      return state
    default:
    return state
  }
}

export default comments
